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

        return (
            <Relative css={{ zIndex: showingInput ? 2 : 0 }} ml={3}>
                <Button variant={isSet ? 'outlineSelected' : 'outline'} onClick={onClick}>
                    <Text>{isSet ? formatTo(value) : name}</Text>
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

export default FilterRange
