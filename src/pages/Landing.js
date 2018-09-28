import React, { Component } from 'react'
import { Flex, Box, Heading, Text } from 'rebass'

class Landing extends Component {
    render() {
        return (
            <Flex
                css={{ minHeight: '100vh' }}
                bg="green.normal"
                color="white"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
            >
                <Box p={4}>
                    <Heading fontWeight="heavy" fontSize={8} lineHeight="1" mb={2}>
                        Moving out.
                        <br />
                        Made easy.
                    </Heading>
                    <Text fontWeight="medium" fontSize={5}>
                        Find you next flat quickly, with <b>movemaison</b>.
                    </Text>
                </Box>
            </Flex>
        )
    }
}

export default Landing
