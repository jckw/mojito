import React, { Component } from 'react'
import { Box } from 'rebass'

import MapMarker from './MapMarker'

class MarkerSet extends Component {
    render() {
        const { filteredProperties } = this.props.query
        const { pagination } = this.props

        return (
            <Box>
                {filteredProperties &&
                    filteredProperties.edges
                        .slice(pagination.from, pagination.until)
                        .map(e => <MapMarker key={e.node.id} property={e.node} />)}
            </Box>
        )
    }
}

export default MarkerSet
