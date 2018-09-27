import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Flex, Heading, Text } from 'rebass'

const features = [
    {
        key: 'furnished',
        name: 'Furnished'
    },
    {
        key: 'dishwasher',
        name: 'Dishwasher'
    },
    {
        key: 'bath',
        name: 'Bath'
    },
    {
        key: 'shower',
        name: 'Shower'
    },
    {
        key: 'garden',
        name: 'Garden'
    },
    {
        key: 'dryer',
        name: 'Dryer'
    },
    {
        key: 'washingMachine',
        name: 'Washing machine'
    },
    {
        key: 'microwave',
        name: 'Microwave'
    },
    {
        key: 'fridge',
        name: 'Fridge'
    },
    {
        key: 'freezer',
        name: 'Freezer'
    },
    {
        key: 'stove',
        name: 'Stove'
    },
    {
        key: 'oven',
        name: 'Oven'
    },
    {
        key: 'airConditioning',
        name: 'Air conditioning'
    },
    {
        key: 'kitchenTable',
        name: 'Kitchen table'
    },
    {
        key: 'desksInRooms',
        name: 'Desks in bedrooms'
    },
    {
        key: 'doubleGlazing',
        name: 'Double glazing'
    },
    {
        key: 'bikeStorage',
        name: 'Bike storage'
    },
    {
        key: 'parkingSpace',
        name: 'Parking space'
    },
    {
        key: 'fireAlarm',
        name: 'Fire alarm'
    },
    {
        key: 'burglarAlarm',
        name: 'Burglar alarm'
    }
]

class FeatureGrid extends Component {
    render() {
        const includedFeatures = features.filter(f => this.props.property[f.key] === true)
        const notIncludedFeatures = features.filter(f => this.props.property[f.key] === false)
        // const unknownFeatures = features.filter(
        //     f => this.props.property[f] !== true && this.props.property[f.key] !== false
        // )

        return (
            <Box pb={4}>
                <Heading fontSize={[4, 5]} mb={2}>
                    Amenities
                </Heading>
                <Flex flexDirection={['column', 'row']}>
                    <Box css={{ flex: 1 }}>
                        <Heading fontSize={[2, 3]}>Included</Heading>
                        {includedFeatures.map(f => (
                            <Text color="grey.0" fontWeight="light" my={2}>
                                {f.name}
                            </Text>
                        ))}
                    </Box>
                    <Box css={{ flex: 1 }} mt={[2, 0]}>
                        <Heading fontSize={[2, 3]}>Not included</Heading>
                        {notIncludedFeatures.map(f => (
                            <Text color="grey.0" fontWeight="light" my={2}>
                                {f.name}
                            </Text>
                        ))}
                    </Box>
                </Flex>
            </Box>
        )
    }
}

export default createFragmentContainer(FeatureGrid, {
    property: graphql`
        fragment FeatureGrid_property on PropertyType {
            furnished
            dishwasher
            bath
            shower
            garden
            dryer
            washingMachine
            microwave
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
