import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Text, Image, Flex } from 'rebass'

import icons from '../assets/icons/features'

const Icon = ({ src }) => <Image src={src} width="4em" />

class FeatureGrid extends Component {
    render() {
        const {
            totalArea,
            ensuites,
            furnished,
            dishwasher,
            shower,
            garden,
            dryer,
            washingMachine,
            fridge,
            freezer,
            stove,
            oven,
            airConditioning,
            kitchenTable,
            desksInRooms,
            doubleGlazing,
            bikeStorage,
            parkingSpace,
            fireAlarm,
            burglarAlarm
        } = this.props.property

        const booleanFeatures = {
            furnished,
            dishwasher,
            shower,
            garden,
            dryer,
            washingMachine,
            fridge,
            freezer,
            stove,
            oven,
            airConditioning,
            kitchenTable,
            desksInRooms,
            doubleGlazing,
            bikeStorage,
            parkingSpace,
            fireAlarm,
            burglarAlarm
        }

        return (
            <Box>
                {totalArea && (
                    <Text>
                        {totalArea}m<sup>2</sup>
                    </Text>
                )}
                {Object.entries(booleanFeatures).map(([key, value]) => {
                    console.log(value)
                    if (value === true) {
                        return <Text>{key}</Text>
                    }
                    return null
                })}
                {Object.entries(booleanFeatures).map(([key, value]) => {
                    if (value === false) {
                        return <Text>Doesn't have {key}</Text>
                    }
                    return null
                })}
                {Object.entries(booleanFeatures).map(([key, value]) => {
                    if (value === null) {
                        return <Text>Might have {key}</Text>
                    }
                    return null
                })}
            </Box>
        )
    }
}

export default createFragmentContainer(FeatureGrid, {
    property: graphql`
        fragment FeatureGrid_property on PropertyType {
            doubleBedrooms
            singleBedrooms
            totalArea
            bathrooms
            ensuites
            furnished
            dishwasher
            shower
            garden
            dryer
            washingMachine
            fridge
            freezer
            stove
            oven
            airConditioning
            kitchenTable
            desksInRooms
            doubleGlazing
            bikeStorage
            parkingSpace
            fireAlarm
            burglarAlarm
        }
    `
})
