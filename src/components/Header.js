import React, { Component } from 'react'
import { Box, Flex, Text } from 'rebass'

import Logo from '../assets/logo.png'

class Header extends Component {
    render() {
        return (
            <Flex
                px={4}
                py={4}
                css={{ borderBottom: '1px solid #E7F2EE' }}
                justifyContent="space-between"
                alignItems="center"
            >
                <Box>
                    <img src={Logo} height="24px" />
                </Box>
                <Flex alignItems="center" mr={3}>
                    <Text color="grey.0" fontSize={2}>
                        List your property
                    </Text>
                </Flex>
            </Flex>
        )
    }
}

export default Header