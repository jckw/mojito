import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Flex, Box, Heading } from 'rebass'

import towelIcon from '../../assets/icons/towel.svg'
import FeatureSquare from '../FeatureSquare'

class BathroomDetails extends Component {
    render() {
        const { bathrooms, ensuites } = this.props.property
        const nonEnsuites = bathrooms - ensuites

        return (
            <Box mb={4}>
                <Heading fontSize={[3]} color="grey.3" mb={2}>
                    Bedrooms
                </Heading>
                <Flex>
                    {!!nonEnsuites && (
                        <FeatureSquare value={nonEnsuites} name="Bathrooms" icon={towelIcon} />
                    )}
                    {!!ensuites && (
                        <FeatureSquare value={ensuites} name="Ensuites" icon={towelIcon} />
                    )}
                </Flex>
            </Box>
        )
    }
}

export default createFragmentContainer(BathroomDetails, {
    property: graphql`
        fragment BathroomDetails_property on PropertyType {
            bathrooms
            ensuites
        }
    `
})
