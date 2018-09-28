import React, { Component } from 'react'
import { Flex, Button, Card, Box, Text } from 'rebass'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import Absolute from './Absolute'
import Position from './Position'

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
            <Position
                position={['static', 'relative']}
                css={{ zIndex: showingInput ? 2 : 0 }}
                ml={3}
            >
                <Button variant={isSet ? 'plainSelected' : 'plainUnselected'} onClick={onClick}>
                    <Text>{isSet ? formatTo(value) : name}</Text>
                </Button>
                {showingInput && (
                    <Absolute
                        top={['auto', '100%']}
                        bottom={['100%', 'auto']}
                        right={[0]}
                        left={[0, 'auto']}
                        css={{ zIndex: 2 }}
                        p={[3, 0]}
                    >
                        <Card
                            bg="white"
                            boxShadow="light"
                            borderRadius={3}
                            p={4}
                            mt={2}
                            width={['100%', '250px']}
                            css={{ boxSizing: 'border-box' }}
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
            </Position>
        )
    }
}

export default FilterRange
