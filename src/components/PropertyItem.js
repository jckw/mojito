import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Heading, Text } from 'rebass'
import { Subscribe } from 'unstated'

import SelectedPropertyState from '../state/SelectedPropertyState'

class PropertyItem extends Component {
    render() {
        const { property } = this.props
        const { street, area, postcode, price, bedrooms, bathrooms } = property

        return (
            <Subscribe to={[SelectedPropertyState]}>
                {properties => {
                    return (
                        <a
                            onClick={() => {
                                properties.setSelectedProperty(property)
                            }}
                        >
                            <Box>
                                <Text fontSize={0} fontWeight="extrabold" color="green.normal">
                                    {bedrooms} BEDROOM • {bathrooms} BATHROOM
                                </Text>
                                <Heading fontSize={3} fontWeight="bold">
                                    {street}, {area.name}, {postcode}
                                </Heading>
                                <Text>£{price} per month</Text>
                            </Box>
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
            price
            bedrooms
            bathrooms
        }
    `
})
