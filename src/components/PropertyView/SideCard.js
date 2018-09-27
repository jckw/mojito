import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Heading, Card, Flex, Box, Text, Button } from 'rebass'

import AgencyHeader from './AgencyHeader'

import outLink from '../../assets/outLink.svg'

class SideCard extends Component {
    render() {
        const { price, totalPrice } = this.props.property
        return (
            <Card
                width={['100%', '450px']}
                p={4}
                borderRadius={5}
                bg="#F7F7F7"
                boxShadow="0px 4px 8px -4px rgba(0, 0, 0, 0.5)"
                mt={[0, '-50px']}
                css={{ boxSizing: 'border-box' }}
                ml={[0, 2]}
            >
                <AgencyHeader property={this.props.property} />
                <Flex mt={3} flexDirection={['row', 'column', 'row']} alignItems="flex-start">
                    <Card
                        bg="green.normal"
                        css={{ display: 'inline-box' }}
                        color="white"
                        px={2}
                        py={1}
                        borderRadius={3}
                        mr={[2, 0, 2]}
                        mb={[0, 2, 0]}
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
                        css={{ display: 'inline-box' }}
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
                <Text
                    css={{ letterSpacing: '0.05em' }}
                    color="grey.0"
                    fontWeight="medium"
                    fontSize={0}
                    mt={3}
                >
                    12 MONTH LEASE • STARTS AUGUST 18TH
                </Text>
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
        }
    `
})
