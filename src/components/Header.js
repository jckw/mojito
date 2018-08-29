import React, { Component } from 'react'
import { Flex, Box, Text } from 'rebass'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <Flex flex-direction="row">
                <Box>
                    <Text>
                        <Link to="/">snapspace</Link>
                    </Text>
                </Box>
            </Flex>
        )
    }
}

export default Header
