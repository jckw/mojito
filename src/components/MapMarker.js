import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Marker } from 'react-google-maps'

import SelectedPropertyState from '../state/SelectedPropertyState'

import markerSelected from '../assets/markerSelected.png'
import markerUnselected from '../assets/markerUnselected.png'
import withState from '../utils/withState'

class MapMarker extends Component {
    onClick = () => {
        const { properties, property } = this.props
        properties.setSelectedProperty(property)
    }

    render() {
        const { property, properties } = this.props
        const { id, location } = property

        return (
            <Marker
                icon={
                    (properties.state.selectedProperty && properties.state.selectedProperty.id === id) ||
                    (properties.state.hoveredProperty && properties.state.hoveredProperty.id === id)
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

export default createFragmentContainer(withState(MapMarker, [SelectedPropertyState]), {
    property: graphql`
        fragment MapMarker_property on PropertyType {
            id
            location {
                coordinates
            }
        }
    `
})
