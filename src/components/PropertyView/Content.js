import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Heading, Flex } from 'rebass'

import PhotoHeader from './PhotoHeader'
import Container from '../Container'

class Content extends Component {
    render() {
        const { street, postcode, area, price } = this.props.property

        return (
            <Box>
                <PhotoHeader property={this.props.property} />
                <Container maxWidth={['900px']} mx="auto">
                    <Flex mt={[5, 5, 6]} mx={[4]} flexDirection={['column', 'row']}>
                        <Box>
                            <Heading fontSize={[5, 6]} fontWeight="800" lineHeight="1.1">
                                {street}, {area.name}, {area.city.name},{' '}
                                <span style={{ display: 'inline-block' }}>{postcode}</span>
                            </Heading>
                        </Box>
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
            price
            ...PhotoHeader_property
        }
    `
})
