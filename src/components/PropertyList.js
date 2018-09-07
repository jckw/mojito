import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box } from 'rebass'

import PropertyItem from './PropertyItem'

class PropertyList extends Component {
    render() {
        const { filteredProperties } = this.props.query

        console.log('rendering')
        return (
            <Box>
                {filteredProperties.edges.map(edge => (
                    <PropertyItem key={edge.node.id} property={edge.node} />
                ))}
            </Box>
        )
    }
}

export default createFragmentContainer(PropertyList, {
    query: graphql`
        fragment PropertyList_query on Query @argumentDefinitions(geometry: { type: "Geometry" }) {
            filteredProperties(location_Intersects: $geometry, first: 10)
                @connection(key: "MapView_filteredProperties", filters: ["location_Intersects"]) {
                edges {
                    node {
                        id
                        ...PropertyItem_property
                    }
                }
            }
        }
    `
})
