import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps'
import { Box } from 'rebass'
import { Subscribe } from 'unstated'

import MapState from '../state/MapState'

class MapView extends Component {
    render() {
        return (
            <Subscribe to={[MapState]}>
                {map => {
                    return (
                        <GoogleMap
                            defaultZoom={14}
                            defaultCenter={{ lat: 51.7471381, lng: -1.2344602000000577 }}
                        >
                            {map.state.visiblePoints.map(point => (
                                <Marker position={{ lat: point.lat, lng: point.lng }} />
                            ))}
                        </GoogleMap>
                    )
                }}
            </Subscribe>
        )
    }
}

export default compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: '100%' }} />,
        containerElement: <Box flex={1} />,
        mapElement: <div style={{ height: '100%' }} />
    }),
    withScriptjs,
    withGoogleMap
)(MapView)
