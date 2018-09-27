import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Flex, Card, Heading, Text, Box } from 'rebass'

class AgencyHeader extends Component {
    render() {
        const { agency } = this.props.property
        return (
            <Flex>
                <Card
                    css={{ width: '32px', height: '32px', flexShrink: '0' }}
                    borderRadius={2}
                    bg="#E9E9E9"
                    mr={2}
                />
                <Box color="grey.0">
                    <Heading fontSize={2} fontWeight="medium">
                        Rent from {agency ? agency.name : 'a private landlord'}
                    </Heading>
                    <Text fontSize={1} fontWeight="light">
                        {agency
                            ? `${agency.name} has a 5 star rating on allAgents.com`
                            : 'This landlord does not operate through an estate agent'}
                    </Text>
                </Box>
            </Flex>
        )
    }
}

export default createFragmentContainer(AgencyHeader, {
    property: graphql`
        fragment AgencyHeader_property on PropertyType {
            agency {
                name
            }
        }
    `
})
