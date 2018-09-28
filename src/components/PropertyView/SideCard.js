import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Heading, Card, Flex, Box, Text, Button } from 'rebass'

import AgencyHeader from './AgencyHeader'

import outLink from '../../assets/outLink.svg'
import LeaseInfo from './LeaseInfo'

class SideCard extends Component {
    render() {
        const { hasPhotos } = this.props
        const { price, totalPrice } = this.props.property
        return (
            <Card
                width={['100%', '350px']}
                p={4}
                borderRadius={5}
                bg="#F7F7F7"
                boxShadow="0px 4px 8px -4px rgba(0, 0, 0, 0.5)"
                css={{ boxSizing: 'border-box' }}
                ml={[0, 2]}
            >
                <AgencyHeader property={this.props.property} />
                <Flex flexDirection={['row']} alignItems="flex-start" css={{ flexWrap: 'wrap' }}>
                    <Card
                        bg="green.normal"
                        css={{
                            display: 'inline-flex',
                            boxShadow: '0px 2px 10px -5px rgba(0,0,0,0.9)',
                            flexShrink: 0
                        }}
                        mt={3}
                        color="white"
                        px={2}
                        py={1}
                        borderRadius={3}
                        mr={[2]}
                    >
                        <Flex>
                            <Heading fontSize={5} mr={1}>
                                £{price}
                            </Heading>
                            <Box fontSize={0}>
                                <Text mt="2px" mb="-2px">
                                    per person
                                </Text>
                                <Text>per month</Text>
                            </Box>
                        </Flex>
                    </Card>
                    <Card
                        bg="green.pale"
                        css={{
                            display: 'inline-flex',
                            boxShadow: '0px 2px 10px -5px rgba(74,159,128,0.9)',
                            flexShrink: 0
                        }}
                        mt={3}
                        color="white"
                        px={2}
                        py={1}
                        borderRadius={3}
                    >
                        <Flex>
                            <Heading fontSize={5} mr={1}>
                                £{totalPrice}
                            </Heading>
                            <Box fontSize={0}>
                                <Text mt="2px" mb="-2px">
                                    in total
                                </Text>
                                <Text>per month</Text>
                            </Box>
                        </Flex>
                    </Card>
                </Flex>
                <LeaseInfo property={this.props.property} />
                <Box>
                    <Button width="100%" mt={3} variant="outlineLarge">
                        Agency listing <img src={outLink} />
                    </Button>
                </Box>
                <Box>
                    <Button width="100%" mt={3} variant="outlineLarge">
                        Book a viewing
                    </Button>
                </Box>
            </Card>
        )
    }
}

export default createFragmentContainer(SideCard, {
    property: graphql`
        fragment SideCard_property on PropertyType {
            price
            totalPrice
            ...AgencyHeader_property
            ...LeaseInfo_property
        }
    `
})
