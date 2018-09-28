import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Flex, Heading, Text } from 'rebass'
import { Collapse } from 'react-collapse'

import Relative from '../Relative'
import Absolute from '../Absolute'

import downArrow from '../../assets/downArrow.svg'

const VISIBLE_FEATURES = 5

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

const Feature = ({ name }) => (
    <Text color="grey.0" fontWeight="light" my={2}>
        {name}
    </Text>
)

const FeatureSection = ({ title, items, showAll }) => (
    <Box css={{ flex: 1 }}>
        <Heading fontSize={[1]} color="grey.1" fontWeight="medium">
            {title}
        </Heading>
        {items.slice(0, VISIBLE_FEATURES).map(f => (
            <Feature name={f.name} />
        ))}
        <Collapse isOpened={showAll}>
            {items.slice(VISIBLE_FEATURES).map(f => (
                <Feature name={f.name} />
            ))}
        </Collapse>
    </Box>
)

class FeatureGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showAll: false
        }
    }

    showAll = () => {
        this.setState({ showAll: true })
    }

    render() {
        const includedFeatures = features.filter(f => this.props.property[f.key] === true)
        const notIncludedFeatures = features.filter(f => this.props.property[f.key] === false)
        // const unknownFeatures = features.filter(
        //     f => this.props.property[f] !== true && this.props.property[f.key] !== false
        // )

        return (
            <Relative>
                <Absolute bottom={0} left={0} right={0}>
                    {!this.state.showAll && (
                        <Flex
                            justifyContent="center"
                            css={{
                                height: '54px',
                                backgroundImage:
                                    'linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, #FFFFFF 100%)'
                            }}
                            onClick={this.showAll}
                        >
                            <img src={downArrow} />
                        </Flex>
                    )}
                </Absolute>
                <Flex flexDirection={['column', 'row']}>
                    <FeatureSection
                        title="Included"
                        items={includedFeatures}
                        showAll={this.state.showAll}
                    />
                    <FeatureSection
                        title="Not included"
                        items={notIncludedFeatures}
                        showAll={this.state.showAll}
                    />
                </Flex>
            </Relative>
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
