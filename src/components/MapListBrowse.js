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

        this.INITIAL_PAGINATION_STATE = {
            from: 0,
            until: ITEMS_PER_PAGE,
            page: 1,
            nextPage: this.nextPage,
            prevPage: this.prevPage,
            totalPages: undefined,
            latestPage: undefined
        }

        this.state = {
            filters: {},
            pagination: this.INITIAL_PAGINATION_STATE
        }
    }

    mapShouldShow = () => window.innerWidth > parseInt(theme.breakpoints[0], 10)

    refetch = filters => {
        const { relay } = this.props
        let finalFilters = filters

        if (filters.geometry && !this.mapShouldShow()) {
            finalFilters.geometry = undefined
        }

        this.setState(
            {
                filters: { ...this.state.filters, ...finalFilters },
                pagination: this.INITIAL_PAGINATION_STATE
            },
            () => relay.refetchConnection(ITEMS_PER_PAGE, null, this.state.filters)
        )
    }

    loadMore = callback => {
        const { relay } = this.props

        return relay.loadMore(ITEMS_PER_PAGE, error => {
            if (error) {
                console.log(error)
            } else {
                callback()
            }
        })
    }

    nextPage = () => {
        const { page, totalPages, latestPage } = this.state.pagination
        const { relay } = this.props

        if (totalPages && page === totalPages) {
            return
        }

        if (page < latestPage) {
            this.bumpPage()
        }

        if (relay.hasMore()) {
            this.loadMore(() => {
                this.bumpPage() // What if this happens before Relay is done fetching data?
                // Maybe use relay.isLoading()?
                this.setState({
                    pagination: {
                        ...this.state.pagination,
                        latestPage: page + 1
                    }
                })
            })
        }
    }

    bumpPage = () => {
        const { page, from, until } = this.state.pagination

        this.setState({
            pagination: {
                ...this.state.pagination,
                from: from + ITEMS_PER_PAGE,
                until: until + ITEMS_PER_PAGE,
                page: page + 1
            }
        })
    }

    prevPage = () => {
        const { page, from, until } = this.state.pagination

        if (page <= 1) {
            return
        }

        this.setState({
            pagination: {
                ...this.state.pagination,
                from: from - ITEMS_PER_PAGE,
                until: until - ITEMS_PER_PAGE,
                page: page - 1
            }
        })
    }

    render() {
        const { query } = this.props

        return (
            <Flex flexDirection={['column-reverse', 'column']} css={{ flex: 1 }}>
                <FilterRow refetch={this.refetch} query={query} />
                <Flex flexDirection="row" css={{ flex: 1 }}>
                    <MapView
                        refetch={this.refetch}
                        query={query}
                        pagination={this.state.pagination}
                    />
                    <PropertyColumn query={query} pagination={this.state.pagination} />
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
            return props && props.query && props.query.filteredProperties
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
