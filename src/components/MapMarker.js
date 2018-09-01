import React, { Component } from 'react'
import { Marker } from 'react-google-maps'

class MapMarker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: false
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick = e => {
        if (this.node.contains(e.target)) {
            return
        }

        const { map } = this.props
        map.unsetSelectedPoint()

        this.setState({ selected: false })
    }

    onClick = () => {
        const { map, point } = this.props
        map.setSelectedPoint(point)
        this.setState({ selected: true })
    }

    render() {
        const { price } = this.props.point

        return (
            <div ref={node => (this.node = node)}>
                <Marker
                    icon={
                        this.state.selected
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
