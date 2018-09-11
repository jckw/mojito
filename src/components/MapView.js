import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import { Box } from 'rebass'

import SelectedPropertyState from '../state/SelectedPropertyState'
import mapStyle from '../assets/mapStyle.json'
import MapMarker from './MapMarker'
import withState from '../utils/withState'

class MapView extends Component {
    _onClick = () => {
        const { properties } = this.props

        properties.unsetSelectedProperty()
    }

    _onDragEnd = () => {
        const { relay } = this.props
        const bounds = this.map.getBounds()
        const { north, east, south, west } = bounds.toJSON()

        const data = {
            type: 'Polygon',
            coordinates: [
                [[east, north], [west, north], [west, south], [east, south], [east, north]]
            ]
        }

        const geometry = JSON.stringify(data)
        relay.refetch({ geometry }) // make this happen for zoom end too
        // need to:
        //   - look up variables in relay/GraphQL
        //   - decide how to do the initial render: what's the first $geometry?
        //   - involve pagination soon
    }

    render() {
        const { query } = this.props

        return (
            <GoogleMap
                ref={map => (this.map = map)}
                defaultZoom={14}
                defaultCenter={{ lat: 51.7471381, lng: -1.2344602000000577 }}
                defaultOptions={{ styles: mapStyle, disableDefaultUI: true }}
                onClick={this._onClick}
                clickableIcons={false}
                onDragEnd={this._onDragEnd}
            >
                {query.filteredProperties &&
                    query.filteredProperties.edges.map(e => (
                        <MapMarker key={e.node.id} property={e.node} />
                    ))}
            </GoogleMap>
        )
    }
}

const ComposedMapView = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyD6fgy1K4D5fIsJKU3JyXkd1narRswi5Cs&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: '100vh', flex: '1', background: '#efefef' }} />,
        containerElement: <Box flex={1} />,
        mapElement: <div style={{ height: '100%' }} />
    }),
    withScriptjs,
    withGoogleMap
)(MapView)

export default createFragmentContainer(withState(ComposedMapView, [SelectedPropertyState]), {
    query: graphql`
        fragment MapView_query on Query @argumentDefinitions(geometry: { type: "Geometry" }) {
            filteredProperties(location_Intersects: $geometry, first: 10)
                @connection(key: "MapView_filteredProperties", filters: ["location_Intersects"]) {
                edges {
                    node {
                        id
                        ...MapMarker_property
                    }
                }
            }
        }
    `
})
