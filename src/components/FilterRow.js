import React, { Component } from 'react'
import { Flex, Button } from 'rebass'

class FilterRow extends Component {
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
                <Button variant="outline">Price</Button>
                <Button variant="outline" ml={3}>
                    Bedrooms
                </Button>
            </Flex>
        )
    }
}

export default FilterRow
