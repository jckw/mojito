import React, { Component } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { Box, Container, Flex } from 'rebass'

import FeatureGrid from './FeatureGrid'
import PropertyHeader from './PropertyHeader'
import PropertySidebar from './PropertySidebar'

class PropertySingle extends Component {
    render() {
        const { property } = this.props

        return (
            <Box>
                <PropertyHeader property={property} />
                <Container>
                    <Flex>
                        <PropertySidebar property={property} />
                        <FeatureGrid property={property} />
                    </Flex>
                </Container>
            </Box>
        )
    }
}

export default createFragmentContainer(PropertySingle, {
    property: graphql`
        fragment PropertySingle_property on PropertyType {
            ...PropertyHeader_property
            ...PropertySidebar_property
            ...FeatureGrid_property
        }
    `
})
