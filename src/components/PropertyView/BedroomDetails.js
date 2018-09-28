import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Flex, Box, Heading } from 'rebass'

import doubleBedroomIcon from '../../assets/icons/doubleBedroom.svg'
import singleBedroomIcon from '../../assets/icons/singleBedroom.svg'
import FeatureSquare from '../FeatureSquare'

class BedroomDetails extends Component {
    render() {
        const { doubleBedrooms, singleBedrooms } = this.props.property
        const hasDoubleBedrooms = !!doubleBedrooms && doubleBedrooms > 0
        const hasSingleBedrooms = !!singleBedrooms && singleBedrooms > 0
        return (
            <Flex>
                {hasDoubleBedrooms && (
                    <FeatureSquare
                        value={doubleBedrooms}
                        name="Double bedroom"
                        icon={doubleBedroomIcon}
                    />
                )}
                {hasSingleBedrooms && (
                    <FeatureSquare
                        value={singleBedrooms}
                        name="Single bedroom"
                        icon={singleBedroomIcon}
                    />
                )}
            </Flex>
        )
    }
}

export default createFragmentContainer(BedroomDetails, {
    property: graphql`
        fragment BedroomDetails_property on PropertyType {
            doubleBedrooms
            singleBedrooms
        }
    `
})
