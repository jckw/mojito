import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { createRefetchContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import { Box } from 'rebass'
import { Subscribe } from 'unstated'

import SelectedPropertyState from '../state/SelectedPropertyState'
import mapStyle from '../assets/mapStyle.json'
import MapMarker from './MapMarker'

class MapView extends Component {
    _onClick = () => {
        const { properties } = this.props

        properties.unsetSelectedProperty()
    }

    render() {
        const { query } = this.props

        return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: 51.7471381, lng: -1.2344602000000577 }}
                defaultOptions={{ styles: mapStyle, disableDefaultUI: true }}
                onClick={this._onClick}
                clickableIcons={false}
            >
                {query.allProperties.edges.map(e => (
                    <MapMarker key={e.node.id} property={e.node} />
                ))}
            </GoogleMap>
        )
    }
}

const MapViewWithState = props => (
    <Subscribe to={[SelectedPropertyState]}>
        {properties => <MapView properties={properties} {...props} />}
    </Subscribe>
)

const ComposedMapView = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyD6fgy1K4D5fIsJKU3JyXkd1narRswi5Cs&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: '100%' }} />,
        containerElement: <Box flex={1} />,
        mapElement: <div style={{ height: '100%', borderTopLeftRadius: '8px' }} />
    }),
    withScriptjs,
    withGoogleMap
)(MapViewWithState)

export default createRefetchContainer(
    ComposedMapView,
    {
        query: graphql`
            fragment MapView_query on Query {
                allProperties {
                    edges {
                        node {
                            id
                            ...MapMarker_property
                        }
                    }
                }
            }
        `
    },
    graphql`
        query MapViewRefetchQuery {
            ...MapView_query
            ...PropertyList_query
        }
    `
)
