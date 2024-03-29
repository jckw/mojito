import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Heading, Flex } from 'rebass'

import PhotoHeader from './PhotoHeader'
import Container from '../Container'
import FeatureGrid from './FeatureGrid'
import SideCard from './SideCard'
import BedroomDetails from './BedroomDetails'
import BathroomDetails from './BathroomDetails'
import AreaDetails from './AreaDetails'

import greyPin from '../../assets/greyPin.svg'

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const Section = ({ title, children }) => (
    <Box mb={4}>
        <Heading fontSize={[3]} color="grey.3" mb={2}>
            {title}
        </Heading>
        {children}
    </Box>
)

class Content extends Component {
    render() {
        const { street, postcode, area, variant } = this.props.property

        return (
            <Box>
                <PhotoHeader property={this.props.property} />
                <Container maxWidth={['800px']} mx="auto">
                    <Flex
                        mt={[5]}
                        mx={[4]}
                        mb={4}
                        flexDirection={['column', 'row']}
                        alignItems="flex-start"
                    >
                        <Box css={{ flex: 1 }}>
                            <Heading
                                fontSize={[5]}
                                fontWeight="heavy"
                                lineHeight="1.1"
                                color="black"
                                mb={1}
                            >
                                {capFirst(variant.name)} on {street}
                            </Heading>
                            <Heading
                                fontSize={[3]}
                                fontWeight="medium"
                                lineHeight="1.1"
                                color="grey.0"
                                mb={3}
                                css={{ letterSpacing: '-0.02em' }}
                            >
                                <img src={greyPin} /> {street}, {area.name}, {area.city.name},{' '}
                                <span style={{ display: 'inline-block' }}>{postcode}</span>
                            </Heading>
                            <Section title="Bedrooms">
                                <BedroomDetails property={this.props.property} />
                            </Section>
                            <Section title="Bathrooms">
                                <BathroomDetails property={this.props.property} />
                            </Section>
                            <Section title="Amenities">
                                <FeatureGrid property={this.props.property} />
                            </Section>
                            <Section title="Area">
                                <AreaDetails property={this.props.property} />
                            </Section>
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
            variant {
                name
            }
            bedrooms
            ...PhotoHeader_property
            ...FeatureGrid_property
            ...SideCard_property
            ...BedroomDetails_property
            ...BathroomDetails_property
            ...AreaDetails_property
        }
    `
})
