import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import { Box } from 'rebass'
import { Subscribe } from 'unstated'

import VisiblePropertiesState from '../state/VisiblePropertiesState'
import mapStyle from '../assets/mapStyle.json'
import MapMarker from './MapMarker'

class MapView extends Component {
    onClick = () => {
        const { properties } = this.props

        properties.unsetSelectedProperty()
    }

    render() {
        const { properties } = this.props

        return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: 51.7471381, lng: -1.2344602000000577 }}
                defaultOptions={{ styles: mapStyle, disableDefaultUI: true }}
                onClick={this.onClick}
                clickableIcons={false}
            >
                {properties.state.visibleProperties.map(p => (
                    <MapMarker
                        key={p.id}
                        point={p}
                        position={
                            // Shouldn't be doing this! No fragment container
                            { lat: p.geometry[0], lng: p.geometry[1] }
                        }
                        properties={properties}
                    />
                ))}
            </GoogleMap>
        )
    }
}

const MapViewWithState = () => (
    <Subscribe to={[VisiblePropertiesState]}>
        {properties => <MapView {...{ properties }} />}
    </Subscribe>
)

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
