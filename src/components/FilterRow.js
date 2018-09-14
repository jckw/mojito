import React, { Component } from 'react'
import { Flex, Button, Card, Box, Text } from 'rebass'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import Relative from './Relative'
import Absolute from './Absolute'

const Range = Slider.Range

class FilterRange extends Component {
    render() {
        const {
            name,
            showingInput,
            value,
            onChange,
            onUnset,
            onClick,
            onClose,
            formatTo,
            isSet,
            min,
            max,
            step
        } = this.props

        console.log(this.props)

        return (
            <Relative css={{ zIndex: showingInput ? 2 : 0 }} ml={2}>
                <Button variant={isSet ? 'outlineSelected' : 'outline'} onClick={onClick}>
                    {isSet ? formatTo(value) : name}
                </Button>
                {showingInput && (
                    <Absolute top="100%" right={0} css={{ zIndex: 2 }}>
                        <Card
                            bg="white"
                            boxShadow="light"
                            borderRadius={3}
                            p={4}
                            mt={2}
                            width="250px"
                        >
                            <Box mb={3} mx={5} py={4}>
                                <Range
                                    min={min}
                                    max={max}
                                    allowCross={false}
                                    value={value}
                                    onChange={onChange}
                                    step={step || 1}
                                />
                            </Box>
                            <Flex justifyContent="space-between">
                                <Button variant="transparent" onClick={onUnset}>
                                    Clear
                                </Button>
                                <Button variant="transparent" onClick={onClose}>
                                    <Text color="green.normal">Apply</Text>
                                </Button>
                            </Flex>
                        </Card>
                    </Absolute>
                )}
            </Relative>
        )
    }
}

const PRICE_RANGE = [0, 700]
const BEDROOMS_RANGE = [1, 16]

class FilterRow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            priceSet: false,
            priceRange: PRICE_RANGE,
            showPriceInput: false,
            bedroomsSet: false,
            bedroomsRange: BEDROOMS_RANGE,
            showBedroomsInput: false
        }
    }

    closeInputs = () => {
        const { relay } = this.props
        const { priceSet, bedroomsSet } = this.state

        this.setState({ showPriceInput: false, showBedroomsInput: false })

        const [minPrice, maxPrice] = this.state.priceRange
        const [minBedrooms, maxBedrooms] = this.state.bedroomsRange

        const data = {
            minPrice: priceSet ? minPrice : undefined,
            maxPrice: priceSet ? maxPrice : undefined,
            minBedrooms: bedroomsSet ? minBedrooms : undefined,
            maxBedrooms: bedroomsSet ? maxBedrooms : undefined
        }

        relay.refetchConnection(10, null, data)
    }

    onPriceChange = priceRange => {
        this.setState({ priceRange, priceSet: true })
    }

    unsetPrice = () => {
        this.setState({ priceSet: false }, this.closeInputs)
    }

    openPriceInput = () => {
        this.setState({ showPriceInput: true, priceSet: true })
    }

    onBedroomsChange = bedroomsRange => {
        this.setState({ bedroomsRange, bedroomsSet: true })
    }

    unsetBedrooms = () => {
        this.setState({ bedroomsSet: false }, this.closeInputs)
    }

    openBedroomsInput = () => {
        this.setState({ showBedroomsInput: true, bedroomsSet: true })
    }

    render() {
        return (
            <Flex
                flexDirection="row"
                justifyContent="flex-end"
                px={3}
                py={3}
                fontSize={2}
                css={{ borderBottom: '1px solid #E7F2EE' }}
            >
                {(this.state.showPriceInput || this.state.showBedroomsInput) && (
                    <Absolute
                        top={0}
                        bottom={0}
                        left={0}
                        right={0}
                        bg="rgba(255, 255, 255, 0.8)"
                        css={{ zIndex: 1 }}
                        onClick={this.closeInputs}
                    />
                )}
                <FilterRange
                    name="Price per person"
                    showingInput={this.state.showPriceInput}
                    value={this.state.priceRange}
                    onChange={this.onPriceChange}
                    onUnset={this.unsetPrice}
                    onClick={this.openPriceInput}
                    formatTo={value => `£${value[0]} - £${value[1]} pp`}
                    isSet={this.state.priceSet}
                    min={PRICE_RANGE[0]}
                    max={PRICE_RANGE[1]}
                    step={10}
                    onClose={this.closeInputs}
                />
                <FilterRange
                    name="Bedrooms"
                    showingInput={this.state.showBedroomsInput}
                    value={this.state.bedroomsRange}
                    onChange={this.onBedroomsChange}
                    onUnset={this.unsetBedrooms}
                    onClick={this.openBedroomsInput}
                    formatTo={value => `${value[0]} to ${value[1]} bedrooms`}
                    isSet={this.state.bedroomsSet}
                    min={BEDROOMS_RANGE[0]}
                    max={BEDROOMS_RANGE[1]}
                    onClose={this.closeInputs}
                />
            </Flex>
        )
    }
}

export default FilterRow
