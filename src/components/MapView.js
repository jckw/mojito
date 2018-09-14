import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import throttle from 'lodash/throttle'
import { Box } from 'rebass'

import SelectedPropertyState from '../state/SelectedPropertyState'
import mapStyle from '../assets/mapStyle.json'
import withState from '../utils/withState'
import MarkerSet from './MarkerSet'

import { getBounds } from '../utils/MapHelpers'

import { ITEMS_PER_PAGE } from '../settings'

class MapView extends Component {
    _onClick = () => {
        const { properties } = this.props

        properties.unsetSelectedProperty()
    }

    refetch = () => {
        const { relay } = this.props
        const bounds = this.map.getBounds()

        const geometry = JSON.stringify(getBounds(bounds.toJSON()))

        relay.refetchConnection(ITEMS_PER_PAGE, null, { geometry })
    }

    render() {
        return (
            <GoogleMap
                ref={map => (this.map = map)}
                defaultZoom={14}
                defaultCenter={{ lat: 51.7471381, lng: -1.2344602000000577 }}
                defaultOptions={{ styles: mapStyle, disableDefaultUI: true }}
                onClick={this._onClick}
                clickableIcons={false}
                onBoundsChanged={throttle(this.refetch, 200)}
            >
                <MarkerSet query={this.props.query} />
            </GoogleMap>
        )
    }
}

const ComposedMapView = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyD6fgy1K4D5fIsJKU3JyXkd1narRswi5Cs&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: '100vh', flex: '1', background: '#efefef' }} />,
        containerElement: <Box css={{ flex: 1 }} />,
        mapElement: <div style={{ height: '100%' }} />
    }),
    withScriptjs,
    withGoogleMap
)(MapView)

export default withState(ComposedMapView, [SelectedPropertyState])
