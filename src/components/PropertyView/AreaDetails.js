import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Text, Box, Heading } from 'rebass'

class AreaDetails extends Component {
    render() {
        const { name, description, city } = this.props.property.area

        return (
            <Box>
                <Heading fontSize={3} color="grey.3" fontWeight="light" mb={2} mt={-1}>
                    {name}, {city.name}
                </Heading>
                {!!description && (
                    <Text fontSize={1} color="grey.0" fontWeight="light">
                        {description}
                    </Text>
                )}
            </Box>
        )
    }
}

export default createFragmentContainer(AreaDetails, {
    property: graphql`
        fragment AreaDetails_property on PropertyType {
            area {
                name
                description
                city {
                    name
                }
            }
        }
    `
})
