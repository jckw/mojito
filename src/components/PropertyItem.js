import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Card, Heading, Text, Relative, Absolute, Box, Flex } from 'rebass'
import { Subscribe } from 'unstated'
import styled from 'styled-components'

import SelectedPropertyState from '../state/SelectedPropertyState'
import PriceTag from './PriceTag'

import cyclist from '../assets/icons/cyclist.svg'
import people from '../assets/icons/people.svg'
import bathroom from '../assets/icons/bathroom.svg'

const InlineFlex = styled(Flex)`
    display: inline-flex;
`

class PropertyItem extends Component {
    render() {
        const { property } = this.props
        const { street, area, postcode, agency, photos: photoEdges } = property

        const photos = photoEdges.edges.map(e => (
            <img
                style={{ height: 'auto', width: '100%' }}
                src={`http://localhost:8000/media/${e.node.photo}`}
            />
        ))

        return (
            <Subscribe to={[SelectedPropertyState]}>
                {properties => {
                    return (
                        <a
                            onClick={() => {
                                properties.setSelectedProperty(property)
                            }}
                        >
                            <Relative>
                                <Card
                                    my={3}
                                    borderRadius={4}
                                    bg="white"
                                    boxShadow="0px 4px 8px -4px rgba(0, 0, 0, 0.5)"
                                    p={3}
                                >
                                    <Absolute top={20} right={-3}>
                                        <PriceTag property={property} />
                                    </Absolute>

                                    <Flex
                                        flexDirection="column"
                                        justifyContent="center"
                                        m={-3}
                                        mb={2}
                                        css={{ height: '155px', overflowY: 'hidden' }}
                                    >
                                        {photos.length > 0 ? (
                                            <Box>{photos}</Box>
                                        ) : (
                                            <Box
                                                css={{ width: '100%', height: '100%' }}
                                                bg="grey"
                                            />
                                        )}
                                    </Flex>

                                    <Box>
                                        <Heading fontSize={2} fontWeight="bold">
                                            {street}, {area.name},{' '}
                                            <span style={{ display: 'inline-block' }}>
                                                {postcode}
                                            </span>
                                        </Heading>
                                        <Text fontSize={1} color="grey" fontWeight="semibold">
                                            Managed by {agency.name}
                                        </Text>
                                        <Flex justifyContent="space-between" mt={2}>
                                            <InlineFlex alignItem="center">
                                                <img src={cyclist} />
                                                <Text ml={1} fontSize={1} color="#D1D1D1">
                                                    5 mins
                                                </Text>
                                            </InlineFlex>
                                            <InlineFlex alignItem="center">
                                                <img src={people} />
                                                <Text ml={1} fontSize={1} color="#D1D1D1">
                                                    4 bedroom
                                                </Text>
                                            </InlineFlex>
                                            <InlineFlex alignItem="center">
                                                <img src={bathroom} />
                                                <Text ml={1} fontSize={1} color="#D1D1D1">
                                                    1 bathroom
                                                </Text>
                                            </InlineFlex>
                                        </Flex>
                                    </Box>
                                </Card>
                            </Relative>
                        </a>
                    )
                }}
            </Subscribe>
        )
    }
}

export default createFragmentContainer(PropertyItem, {
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
