import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Heading, Text } from 'rebass'
import { Link } from 'react-router-dom'

import Card from './common/Card'

class PropertyItem extends Component {
    render() {
        const { id, street, area, postcode, price, bedrooms, bathrooms } = this.props.property

        return (
            <Link
                to={`/property/${id}`}
                target="_blank"
                style={{ textDecoration: 'none', color: '#3D3D3D' }}
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
            </Link>
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
