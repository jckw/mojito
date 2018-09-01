import React, { Component } from 'react'
import { Subscribe } from 'unstated'
import { Box } from 'rebass'

import PropertyView from './PropertyView'
import PropertyList from './PropertyList'

import MapState from '../state/MapState'

class MapSidebar extends Component {
    render() {
        const { query } = this.props
        return (
            <Subscribe to={[MapState]}>
                {map => (
                    <Box>
                        {map.state.selectedPoint !== null ? (
                            <PropertyView />
                        ) : (
                            <PropertyList query={query} />
                        )}
                    </Box>
                )}
            </Subscribe>
        )
    }
}

export default MapSidebar
