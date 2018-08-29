import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Heading, Text, Flex, Box } from 'rebass'

import Card from './common/Card'

const Divider = () => (
    <div
        style={{
            width: '1px',
            height: '35px',
            background: '#979797',
            overflow: 'hidden',
            margin: '0 16px'
        }}
    >
        &nbsp;
    </div>
)

class CostsCard extends Component {
    render() {
        const { price } = this.props.property

        return (
            <Card>
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex flex="3" flexDirection="column" alignItems="center">
                        <Heading fontSize={5}>£{price}</Heading>
                        <Text fontSize={0}>per month</Text>
                    </Flex>
                    <Divider />
                    <Flex flex="2" flexDirection="column" alignItems="center">
                        <Heading fontSize={4}>+£200</Heading>
                        <Text fontSize={0}>agency fee</Text>
                    </Flex>
                </Flex>
            </Card>
        )
    }
}

export default createFragmentContainer(CostsCard, {
    property: graphql`
        fragment CostsCard_property on PropertyType {
            price
        }
    `
})
