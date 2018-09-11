import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box } from 'rebass'

import MapMarker from './MapMarker'

class MarkerSet extends Component {
    render() {
        const { query } = this.props

        return (
            <Box>
                {query.filteredProperties &&
                    query.filteredProperties.edges.map(e => (
                        <MapMarker key={e.node.id} property={e.node} />
                    ))}
            </Box>
        )
    }
}

export default createFragmentContainer(MarkerSet, {
    query: graphql`
        fragment MarkerSet_query on Query
            @argumentDefinitions(geometry: { type: "Geometry" }, first: { type: "Int" }) {
            filteredProperties(location_Intersects: $geometry, first: $first)
                @connection(key: "MapView_filteredProperties", filters: ["location_Intersects"]) {
                edges {
                    node {
                        id
                        ...MapMarker_property
                    }
                }
            }
        }
    `
})
