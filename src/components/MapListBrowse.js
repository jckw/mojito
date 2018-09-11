import React, { Component } from 'react'
import { createPaginationContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Flex } from 'rebass'

import MapView from '../components/MapView'
import PropertyColumn from '../components/PropertyColumn'

class MapListBrowse extends Component {
    render() {
        const { query } = this.props

        return (
            <Flex flex={1} flexDirection="row" css={{ height: '100%' }}>
                <MapView query={query} />
                <PropertyColumn query={query} />
            </Flex>
        )
    }
}

export default createPaginationContainer(
    MapListBrowse,
    {
        query: graphql`
            fragment MapListBrowse_query on Query
                @argumentDefinitions(
                    count: { type: "Int", defaultValue: 10 }
                    cursor: { type: "String" }
                ) {
                filteredProperties(first: $count, after: $cursor)
                    @connection(key: "MapListBrowse_filteredProperties") {
                    edges {
                        node {
                            id # to pass down
                            ...MapMarker_property
                            ...PropertyItem_property
                        }
                    }
                }
            }
        `
    },
    {}
)
