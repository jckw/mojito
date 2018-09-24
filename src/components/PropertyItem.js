import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Card, Heading, Text, Box, Flex } from 'rebass'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import { Link } from 'react-router-dom'

import SelectedPropertyState from '../state/SelectedPropertyState'
import PriceTag from './PriceTag'
import Relative from './Relative'
import Absolute from './Absolute'

import cyclist from '../assets/icons/cyclist.svg'
import people from '../assets/icons/people.svg'
import bathroom from '../assets/icons/bathroom.svg'
import withState from '../utils/withState'

import '../styles/NukaCarousel.css'

const InlineFlex = styled(Flex)`
    display: inline-flex;
`

const BASE_MEDIA_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://movemaison-media.s3.amazonaws.com'
        : 'http://localhost:8000'

class PropertyItem extends Component {
    onMouseOver = () => {
        const { property, properties } = this.props
        properties.setHoveredProperty(property)
    }

    onMouseOut = () => {
        const { properties } = this.props
        properties.unsetHoveredProperty()
    }

    onClick = () => {
        const { property, properties } = this.props
        properties.setSelectedProperty(property)
    }

    render() {
        const { property } = this.props
        const { street, area, postcode, agency, photos: photoEdges, bedrooms, bathrooms } = property

        const photos = photoEdges.edges.map(e => (
            <img
                key={e.node.photo}
                src={`${BASE_MEDIA_URL}/media/${e.node.photo}`}
                onLoad={() => {
                    /* TODO: Find a better fix for this bug - too hacky! */
                    window.dispatchEvent(new Event('resize'))
                }}
            />
        ))

        return (
            <Box onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                <Relative>
                    <Card
                        borderRadius={4}
                        bg="white"
                        boxShadow="0px 4px 8px -4px rgba(0, 0, 0, 0.5)"
                        p={3}
                        css={{
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Absolute top={20} right={-3} css={{ zIndex: 1 }}>
                            <PriceTag property={property} />
                        </Absolute>

                        <Flex
                            flexDirection="column"
                            justifyContent="center"
                            m={-3}
                            mb={2}
                            css={{ height: '180px', overflowY: 'hidden' }}
                        >
                            {photos.length > 0 ? (
                                <Box css={{ height: '100%' }}>
                                    <Carousel style={{ height: '100%' }} wrapAround>
                                        {photos}
                                    </Carousel>
                                </Box>
                            ) : (
                                <Box css={{ width: '100%', height: '100%' }} bg="grey.0" />
                            )}
                        </Flex>

                        <Link
                            to="/properties/oxford/cowley/1234"
                            style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                        >
                            <Heading fontSize={2} fontWeight="bold">
                                {street}, {area.name},{' '}
                                <span style={{ display: 'inline-block' }}>{postcode}</span>
                            </Heading>
                            <Text fontSize={1} color="grey.0" fontWeight="semibold">
                                {agency ? `Managed by ${agency.name}` : 'No managing agency'}
                            </Text>
                            <Flex justifyContent="space-between" mt={2}>
                                <InlineFlex alignItems="center">
                                    <img src={cyclist} />
                                    <Text ml={1} fontSize={1} color="#D1D1D1">
                                        5 mins
                                    </Text>
                                </InlineFlex>
                                <InlineFlex alignItems="center">
                                    <img src={people} />
                                    <Text ml={1} fontSize={1} color="#D1D1D1">
                                        {bedrooms} bedroom
                                    </Text>
                                </InlineFlex>
                                <InlineFlex alignItems="center">
                                    <img src={bathroom} />
                                    <Text ml={1} fontSize={1} color="#D1D1D1">
                                        {bathrooms} bathroom
                                    </Text>
                                </InlineFlex>
                            </Flex>
                        </Link>
                    </Card>
                </Relative>
            </Box>
        )
    }
}

export default createFragmentContainer(withState(PropertyItem, [SelectedPropertyState]), {
    property: graphql`
        fragment PropertyItem_property on PropertyType {
            id
            street
            area {
                name
            }
            postcode
            bedrooms
            bathrooms
            agency {
                name
            }
            photos {
                edges {
                    node {
                        photo
                    }
                }
            }
            ...PriceTag_property
        }
    `
})
