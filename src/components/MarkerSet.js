import React, { Component } from 'react'
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

export default MarkerSet
