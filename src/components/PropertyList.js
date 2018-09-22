import React, { Component } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import { gridTemplateColumns } from 'styled-system'

import PropertyItem from './PropertyItem'

const Grid = styled(Box)`
    display: grid;
    grid-gap: 15px;
    ${gridTemplateColumns};
`

class PropertyList extends Component {
    render() {
        const { filteredProperties } = this.props.query

        return (
            <Box>
                <Grid gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr 1fr']}>
                    {filteredProperties.edges.map(edge => (
                        <PropertyItem key={edge.node.id} property={edge.node} />
                    ))}
                </Grid>
            </Box>
        )
    }
}

export default PropertyList
