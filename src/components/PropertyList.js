import React, { Component } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import { gridTemplateColumns } from 'styled-system'

import PropertyItem from './PropertyItem'

const Grid = styled(Box)`
    display: grid;
    grid-gap: 24px;
    ${gridTemplateColumns};
    grid-auto-rows: max-content;
`

class PropertyList extends Component {
    render() {
        const { filteredProperties } = this.props.query
        const { pagination } = this.props

        return (
            <Box>
                <Grid
                    gridTemplateColumns={[
                        '100%',
                        'minmax(0, 1fr)',
                        /* TODO: I don't really know what's going on with minmax here - too hacky! 
                             * Check out: https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items
                             */
                        'minmax(0, 1fr) minmax(0, 1fr)',
                        'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)'
                    ]}
                >
                    {filteredProperties.edges.slice(pagination.from, pagination.until).map(edge => (
                        <PropertyItem key={edge.node.id} property={edge.node} />
                    ))}
                </Grid>
                <button onClick={pagination.prevPage}>prev</button>
                <button onClick={pagination.nextPage}>next</button>
            </Box>
        )
    }
}

export default PropertyList
