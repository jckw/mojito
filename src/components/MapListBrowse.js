import React, { Component } from 'react'
import { createPaginationContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Flex } from 'rebass'

import MapView from '../components/MapView'
import PropertyColumn from '../components/PropertyColumn'

class MapListBrowse extends Component {
    render() {
        const { query, relay } = this.props

        return (
            <Flex flexDirection="row" css={{ flex: 1 }}>
                <MapView query={query} relay={relay} />
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
                    geometry: { type: "Geometry", defaultValue: null }
                ) {
                filteredProperties(first: $count, after: $cursor, location_Intersects: $geometry)
                    @connection(
                        key: "MapListBrowse_filteredProperties"
                        filters: ["location_Intersects"]
                    ) {
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
    {
        direction: 'forward',
        getConnectionFromProps(props) {
            return props && props.filteredProperties
        },
        getFragmentVariables(prevVars, totalCount) {
            return {
                ...prevVars,
                count: totalCount
            }
        },
        getVariables(props, { count, cursor }, { geometry }) {
            return {
                count,
                cursor,
                geometry
            }
        },
        query: graphql`
            query MapListBrowseForwardQuery($count: Int!, $cursor: String, $geometry: Geometry) {
                ...MapListBrowse_query
                    @arguments(count: $count, cursor: $cursor, geometry: $geometry)
            }
        `
    }
)
