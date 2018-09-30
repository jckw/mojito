import React, { Component } from 'react'
import { Box, Flex, Button, Text } from 'rebass'
import styled from 'styled-components'
import { gridTemplateColumns } from 'styled-system'

import PropertyItem from './PropertyItem'

import nextButton from '../assets/nextButton.svg'
import prevButton from '../assets/prevButton.svg'

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
                <Flex alignItems="center" justifyContent="center" mt={3}>
                    <Button
                        variant="plainUnselected"
                        onClick={pagination.prevPage}
                        css={{ opacity: pagination.hasPrevPage() ? 1 : 0 }}
                        mr={2}
                    >
                        <img src={prevButton} />
                    </Button>
                    <Text fontWeight="light" fontSize={2} color="grey.1" mb={1}>
                        {pagination.page}
                    </Text>
                    <Button
                        variant="plainUnselected"
                        onClick={pagination.nextPage}
                        css={{ opacity: pagination.hasNextPage() ? 1 : 0 }}
                        ml={2}
                    >
                        <img src={nextButton} />
                    </Button>
                </Flex>
            </Box>
        )
    }
}

export default PropertyList
