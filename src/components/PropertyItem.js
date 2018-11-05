import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Card, Heading, Text, Box, Flex } from 'rebass'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import { Link } from 'react-router-dom'

import SelectedPropertyState from '../state/SelectedPropertyState'
import SelectedLandmarkState from '../state/SelectedLandmarkState'
import PriceTag from './PriceTag'
import Relative from './Relative'
import Absolute from './Absolute'
import FeatureIcon from './FeatureIcon'

import cyclist from '../assets/icons/cyclist.svg'
import people from '../assets/icons/people.svg'
import walker from '../assets/icons/walker.svg'
import bathroom from '../assets/icons/bathroom.svg'
import withState from '../utils/withState'

import getPhotoURL from '../utils/getPhotoURL'

import '../styles/NukaCarousel.css'

const InlineFlex = styled(Flex)`
    display: inline-flex;
`

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
        const { property, landmark } = this.props
        const {
            street,
            area,
            postcode,
            agency,
            photos: photoEdges,
            bedrooms,
            bathrooms,
            landmarkDistances
        } = property

        const photos = photoEdges.edges.map(e => (
            <img
                key={e.node.photo}
                src={getPhotoURL(e.node.photo)}
                onLoad={() => {
                    /* TODO: Find a better fix for this bug - too hacky! */
                    window.dispatchEvent(new Event('resize'))
                }}
            />
        ))

        const selectedLandmark = landmark.state.selectedLandmark
        const selectedLandmarkDistance =
            selectedLandmark &&
            landmarkDistances.edges.filter(e => e.node.landmark.id === selectedLandmark.id)[0]

        const cyclingTime = selectedLandmarkDistance
            ? selectedLandmarkDistance.node.cyclingTime
            : '?'
        const walkingTime = selectedLandmarkDistance
            ? selectedLandmarkDistance.node.walkingTime
            : '?'

        return (
            <Box onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                <Relative>
                    <Card
                        borderRadius={4}
                        bg="white"
                        boxShadow="0px 4px 8px -4px rgba(0, 0, 0, 0.5)"
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
                            mb={2}
                            css={{ height: '150px', overflowY: 'hidden' }}
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
                            target="_blank"
                            to={property.url}
                            style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                        >
                            <Box px={3} py={1}>
                                <Text
                                    fontSize={1}
                                    mb={1}
                                    color="grey.0"
                                    fontWeight="medium"
                                    style={{ letterSpacing: '0.05em' }}
                                >
                                    {agency ? `${agency.name.toUpperCase()}` : 'PRIVATE LANDLORD'} •
                                    FLAT {/* TODO: Add useful text */}
                                </Text>
                                <Heading fontSize={3} fontWeight="bold">
                                    {street}, {area.name},{' '}
                                    <span style={{ display: 'inline-block' }}>{postcode}</span>
                                </Heading>
                            </Box>
                            <Flex
                                justifyContent="space-between"
                                mt={2}
                                px={4}
                                py={3}
                                css={{ borderTop: '1px solid #E7F2EE' }}
                            >
                                <FeatureIcon name="Beds" icon={people} value={bedrooms} />
                                <FeatureIcon name="Baths" icon={bathroom} value={bathrooms} />
                                <FeatureIcon name="Minute" icon={walker} value={walkingTime} />
                                <FeatureIcon name="Minute" icon={cyclist} value={cyclingTime} />
                            </Flex>
                        </Link>
                    </Card>
                </Relative>
            </Box>
        )
    }
}

export default createFragmentContainer(
    withState(PropertyItem, [SelectedPropertyState, SelectedLandmarkState]),
    {
        property: graphql`
            fragment PropertyItem_property on PropertyType {
                id
                street
                url
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
                landmarkDistances {
                    edges {
                        node {
                            landmark {
                                id
                                name
                            }
                            walkingTime
                            cyclingTime
                        }
                    }
                }
                ...PriceTag_property
            }
        `
    }
)
