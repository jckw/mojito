import React, { Component } from 'react'
import { Flex, Button, Card, Box, Text } from 'rebass'

import Absolute from './Absolute'
import Position from './Position'

class FilterRange extends Component {
    render() {
        const { showingInput, value, onChange, onClick, preText, options } = this.props

        return (
            <Position
                position={['static', 'relative']}
                css={{ zIndex: showingInput ? 2 : 0 }}
                ml={3}
            >
                <Button variant="plainSelected" onClick={onClick}>
                    <Text>
                        {preText}
                        <select value={value} onChange={onChange}>
                            {options.map(o => (
                                <option value={o}>{o}</option>
                            ))}
                        </select>
                    </Text>
                </Button>
            </Position>
        )
    }
}

export default FilterRange
