import React, { Component } from 'react'
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

export default MapListBrowse
