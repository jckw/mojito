import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box } from 'rebass'
import styled from 'styled-components'

import PropertyItem from './PropertyItem'

const Grid = styled(Box)`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
`

class PropertyList extends Component {
    render() {
        const { filteredProperties } = this.props.query

        console.log('rendering')
        return (
            <Grid>
                {filteredProperties.edges.map(edge => (
                    <PropertyItem key={edge.node.id} property={edge.node} />
                ))}
            </Grid>
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
