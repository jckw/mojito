import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box } from 'rebass'

import PropertyItem from './PropertyItem'

class PropertyList extends Component {
    render() {
        const { allProperties } = this.props.query

        return (
            <Box>
                {allProperties.edges.map(edge => (
                    <PropertyItem key={edge.node.id} property={edge.node} />
                ))}
            </Box>
        )
    }
}

export default createFragmentContainer(PropertyList, {
    query: graphql`
        fragment PropertyList_query on Query {
            allProperties {
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
