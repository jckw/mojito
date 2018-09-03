import React, { Component } from 'react'
import { Marker } from 'react-google-maps'

class MapMarker extends Component {
    onClick = () => {
        const { properties, point } = this.props
        properties.setSelectedProperty(point)
    }

    render() {
        const { properties } = this.props
        const { id, price } = this.props.point

        return (
            <div ref={node => (this.node = node)}>
                <Marker
                    icon={
                        properties.state.selectedProperty &&
                        properties.state.selectedProperty.id === id
                            ? 'https://developers.google.com/maps/documentation/javascript/images/custom-marker.png'
                            : null
                    }
                    label={`£${price}`}
                    onClick={this.onClick}
                    {...this.props}
                />
            </div>
        )
    }
}

export default MapMarker
