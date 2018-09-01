import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Container, Text, Image, Flex, Heading, Box } from 'rebass'

import PropertyPhotosContainer from './PropertyPhotosContainer'
import icons from '../assets/icons/features'

const Feature = ({ src, name, show, quantity }) => {
    if (!show) {
        return null
    }

    return (
        <Flex alignItems="center" mb={2}>
            <Image src={src} width="3em" mr={3} />
            <Text fontSize={2} color="white">
                {quantity} {name}
                {quantity > 1 ? 's' : ''}
            </Text>
        </Flex>
    )
}

class PropertyHeader extends Component {
    render() {
        const { street, postcode, doubleBedrooms, singleBedrooms, bathrooms } = this.props.property
        return (
            <Box bg="green.normal" py={6}>
                <Container>
                    <Heading fontSize={6} mb={4} color="white" lineHeight="heading">
                        {street},<br />
                        {postcode}
                    </Heading>
                    <Feature
                        src={icons.doubleBedroom}
                        name="double bedroom"
                        show={doubleBedrooms > 0}
                        quantity={doubleBedrooms}
                    />
                    <Feature
                        src={icons.singleBedroom}
                        name="single bedroom"
                        show={singleBedrooms > 0}
                        quantity={singleBedrooms}
                    />
                    <Feature
                        src={icons.bathroom}
                        name="bathroom"
                        show={bathrooms > 0}
                        quantity={bathrooms}
                    />
                </Container>
                <PropertyPhotosContainer property={this.props.property} />
            </Box>
        )
    }
}

export default createFragmentContainer(PropertyHeader, {
    property: graphql`
        fragment PropertyHeader_property on PropertyType {
            street
            postcode
            singleBedrooms
            doubleBedrooms
            bathrooms
            ...PropertyPhotosContainer_property
        }
    `
})
