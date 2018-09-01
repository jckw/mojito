import React, { Component } from 'react'
import { Marker } from 'react-google-maps'

class MapMarker extends Component {
    onClick = () => {
        const { map, point } = this.props
        map.setSelectedPoint(point)
    }

    render() {
        const { map } = this.props
        const { id, price } = this.props.point

        return (
            <div ref={node => (this.node = node)}>
                <Marker
                    icon={
                        map.state.selectedPoint && map.state.selectedPoint.id === id
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
