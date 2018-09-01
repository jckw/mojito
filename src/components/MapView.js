import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import { Box } from 'rebass'
import { Subscribe } from 'unstated'

import MapState from '../state/MapState'
import mapStyle from '../assets/mapStyle.json'
import MapMarker from './MapMarker'

class MapView extends Component {
    onClick = () => {
        const { map } = this.props

        map.unsetSelectedPoint()
    }

    render() {
        const { map } = this.props

        return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: 51.7471381, lng: -1.2344602000000577 }}
                defaultOptions={{ styles: mapStyle, disableDefaultUI: true }}
                onClick={this.onClick}
            >
                {map.state.visiblePoints.map(point => (
                    <MapMarker
                        key={point.id}
                        point={point}
                        position={{ lat: point.lat, lng: point.lng }}
                        map={map}
                    />
                ))}
            </GoogleMap>
        )
    }
}

const MapViewWithState = () => <Subscribe to={[MapState]}>{map => <MapView map={map} />}</Subscribe>

export default compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyD6fgy1K4D5fIsJKU3JyXkd1narRswi5Cs&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: '100%' }} />,
        containerElement: <Box flex={1} />,
        mapElement: <div style={{ height: '100%' }} />
    }),
    withScriptjs,
    withGoogleMap
)(MapViewWithState)
