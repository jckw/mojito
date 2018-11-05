import React, { Component } from 'react'
import { Button, Text } from 'rebass'

import Position from './Position'

class FilterRange extends Component {
    render() {
        const {
            showingInput,
            selectedNode,
            onChange,
            onClick,
            preText,
            getText,
            options
        } = this.props

        return (
            <Position
                position={['static', 'relative']}
                css={{ zIndex: showingInput ? 2 : 0 }}
                ml={3}
            >
                <Button variant="plainSelected" onClick={onClick}>
                    <Text>
                        {preText}
                        <select value={selectedNode.id} onChange={onChange}>
                            {options.map(node => (
                                <option value={node.id} key={node.id}>
                                    {getText(node)}
                                </option>
                            ))}
                        </select>
                    </Text>
                </Button>
            </Position>
        )
    }
}

export default FilterRange
