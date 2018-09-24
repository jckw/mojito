import React, { Component } from 'react'
import { createPaginationContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Flex } from 'rebass'

import MapView from '../components/MapView'
import PropertyColumn from '../components/PropertyColumn'
import FilterRow from '../components/FilterRow'
import theme from '../theme'

import { ITEMS_PER_PAGE } from '../settings'

class MapListBrowse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filters: {}
        }
    }

    mapShouldShow = () => window.innerWidth > parseInt(theme.breakpoints[0], 10)

    refetch = filters => {
        const { relay } = this.props
        let finalFilters = filters

        if (filters.geometry && !this.mapShouldShow()) {
            finalFilters.geometry = undefined
        }

        this.setState({ filters: { ...this.state.filters, ...finalFilters } }, () =>
            relay.refetchConnection(ITEMS_PER_PAGE, null, this.state.filters)
        )
    }

    render() {
        const { query } = this.props

        return (
            <Flex flexDirection={['column-reverse', 'column']} css={{ flex: 1 }}>
                <FilterRow refetch={this.refetch} query={query} />
                <Flex flexDirection="row" css={{ flex: 1 }}>
                    <MapView refetch={this.refetch} query={query} />
                    <PropertyColumn query={query} />
                </Flex>
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
                    count: { type: "Int" }
                    cursor: { type: "String" }
                    geometry: { type: "Geometry", defaultValue: null }
                    minPrice: { type: "Float" }
                    maxPrice: { type: "Float" }
                    minBedrooms: { type: "Float" }
                    maxBedrooms: { type: "Float" }
                ) {
                filteredProperties(
                    first: $count
                    after: $cursor
                    location_Intersects: $geometry
                    price_Gte: $minPrice
                    price_Lte: $maxPrice
                    bedrooms_Gte: $minBedrooms
                    bedrooms_Lte: $maxBedrooms
                )
                    @connection(
                        key: "MapListBrowse_filteredProperties"
                        filters: [
                            "location_Intersects"
                            "price_Gte"
                            "price_Lte"
                            "bedrooms_Gte"
                            "bedrooms_Lte"
                        ]
                    ) {
                    edges {
                        node {
                            id # to pass down
                            ...MapMarker_property
                            ...PropertyItem_property
                        }
                    }
                }
                ...FilterRow_query
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
        getVariables(
            props,
            { count, cursor },
            { geometry, minPrice, maxPrice, minBedrooms, maxBedrooms }
        ) {
            return {
                count: ITEMS_PER_PAGE,
                cursor,
                geometry,
                minPrice,
                maxPrice,
                minBedrooms,
                maxBedrooms
            }
        },
        query: graphql`
            query MapListBrowseForwardQuery(
                $count: Int!
                $cursor: String
                $geometry: Geometry
                $minPrice: Float
                $maxPrice: Float
                $minBedrooms: Float
                $maxBedrooms: Float
            ) {
                ...MapListBrowse_query
                    @arguments(
                        count: $count
                        cursor: $cursor
                        geometry: $geometry
                        minPrice: $minPrice
                        maxPrice: $maxPrice
                        minBedrooms: $minBedrooms
                        maxBedrooms: $maxBedrooms
                    )
            }
        `
    }
)
