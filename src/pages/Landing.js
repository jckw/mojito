import React, { Component } from 'react'
import { Flex, Box, Heading, Text, Button } from 'rebass'
import { Link } from 'react-router-dom'

import arrowRight from '../assets/arrowRight.svg'

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
                <Box p={4} mx="auto" css={{ width: '100%', maxWidth: '500px' }}>
                    <Heading fontWeight="heavy" fontSize={7} lineHeight="1" mb={1}>
                        Moving out.
                        <br />
                        Made easy.
                    </Heading>
                    <Text fontWeight="normal" fontSize={4} mb={3}>
                        Find you next flat quickly, with <b>movemaison</b>.
                    </Text>
                    <Link to="/search/oxford">
                        <Button
                            css={{
                                background: '#1B7957',
                                boxShadow: '0 2px 20px -6px #1B7957',
                                width: '100%'
                            }}
                            py="24px"
                            px="30px"
                            fontWeight="normal"
                            borderRadius="18px"
                        >
                            <Flex justifyContent="space-between" alignItems="center">
                                <Text>University of Oxford</Text>
                                <img src={arrowRight} />
                            </Flex>
                        </Button>
                    </Link>
                </Box>
            </Flex>
        )
    }
}

export default Landing
