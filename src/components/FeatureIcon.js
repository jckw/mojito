import React, { Component } from 'react'
import { Box, Flex, Text } from 'rebass'

class FeatureIcon extends Component {
    render() {
        return (
            <Box>
                <Flex>
                    <img src={this.props.icon} />
                    <Text color="#8E8E8E" fontSize={2} fontWeight="medium" ml={2}>
                        {this.props.value}
                    </Text>
                </Flex>
                <Text fontSize={0} color="#949494">
                    {this.props.name}
                </Text>
            </Box>
        )
    }
}

export default FeatureIcon
