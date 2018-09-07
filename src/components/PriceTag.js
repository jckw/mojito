import React, { Component } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { Card, Text } from 'rebass'

class PriceTag extends Component {
    render() {
        const price = 500

        return (
            <Card borderRadius={3} bg="green.normal" py={1} px={2}>
                <Text fontWeight="extrabold" fontSize={3} color="white">
                    £{price}
                </Text>
            </Card>
        )
    }
}

export default createFragmentContainer(PriceTag, {
    property: graphql`
        fragment PriceTag_property on PropertyType {
            price
        }
    `
})
