import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Heading, Flex } from 'rebass'

import PhotoHeader from './PhotoHeader'
import Container from '../Container'
import FeatureGrid from './FeatureGrid'
import SideCard from './SideCard'
import BedroomDetails from './BedroomDetails'

class Content extends Component {
    render() {
        const { street, postcode, area } = this.props.property

        return (
            <Box>
                <PhotoHeader property={this.props.property} />
                <Container maxWidth={['900px']} mx="auto">
                    <Flex
                        mt={[5, 5, 6]}
                        mx={[4]}
                        mb={4}
                        flexDirection={['column', 'row']}
                        alignItems="flex-start"
                    >
                        <Box>
                            <Heading fontSize={[5, 6]} fontWeight="800" lineHeight="1.1" mb={3}>
                                {street}, {area.name}, {area.city.name},{' '}
                                <span style={{ display: 'inline-block' }}>{postcode}</span>
                            </Heading>
                            <BedroomDetails property={this.props.property} />
                            <FeatureGrid property={this.props.property} />
                        </Box>
                        <SideCard property={this.props.property} />
                    </Flex>
                </Container>
            </Box>
        )
    }
}

export default createFragmentContainer(Content, {
    property: graphql`
        fragment Content_property on PropertyType {
            street
            postcode
            area {
                name
                city {
                    name
                }
            }
            bedrooms
            ...PhotoHeader_property
            ...FeatureGrid_property
            ...SideCard_property
            ...BedroomDetails_property
        }
    `
})
