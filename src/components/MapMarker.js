import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Marker } from 'react-google-maps'
import { Subscribe } from 'unstated'

import SelectedPropertyState from '../state/SelectedPropertyState'

import markerSelected from '../assets/markerSelected.png'
import markerUnselected from '../assets/markerUnselected.png'

class MapMarker extends Component {
    onClick = () => {
        const { properties, property } = this.props
        properties.setSelectedProperty(property)
    }

    render() {
        const { property, properties } = this.props
        const { id, price, location } = property

        return (
            <Marker
                icon={
                    properties.state.selectedProperty && properties.state.selectedProperty.id === id
                        ? markerSelected
                        : markerUnselected
                }
                onClick={this.onClick}
                position={{
                    lng: location.coordinates[0],
                    lat: location.coordinates[1]
                }}
                {...this.props}
            />
        )
    }
}

const MapMarkerWithState = props => (
    <Subscribe to={[SelectedPropertyState]}>
        {properties => <MapMarker properties={properties} {...props} />}
    </Subscribe>
)

export default createFragmentContainer(MapMarkerWithState, {
    property: graphql`
        fragment MapMarker_property on PropertyType {
            id
            location {
                coordinates
            }
        }
    `
})
