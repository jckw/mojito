import React, { Component } from 'react'
import { Marker } from 'react-google-maps'

class MapMarker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: false
        }
    }

    onClick = () => {
        const { map, point } = this.props
        map.setSelectedPoint(point)
        this.setState({ selected: true })
    }

    render() {
        return <Marker onClick={this.onClick} {...this.props} />
    }
}

export default MapMarker
