import React, { Component } from 'react'
import { Container, Card, Flex, Box, Text, Heading } from 'rebass'

import brain from '../assets/icons/brain.svg'
import Logo from '../assets/Logo.svg'

class PropertyColumn extends Component {
    render() {
        return (
            <Container maxWidth={['200px']} width="100%" bg="green.pale">
                <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    css={{ height: '100%' }}
                >
                    <Box>
                        <Box my={3} mx={2}>
                            <img src={Logo} style={{ height: '24px' }} />
                        </Box>
                        <Card bg="green.grey" p={3} mb={3}>
                            <Flex justifyContent="space-between" mb={2}>
                                <Heading color="green.dark" fontSize={2}>
                                    Wise up about rent.
                                </Heading>
                                <img src={brain} style={{ height: '2em' }} />
                            </Flex>
                            <Text color="green.dark" fontSize={1}>
                                What are the fees? What's the average rent for this area? How do I
                                book a viewing?
                            </Text>
                        </Card>
                    </Box>
                    <Box my={3}>
                        <Text fontSize={0} color="green.dark">
                            Contact
                        </Text>
                    </Box>
                </Flex>
            </Container>
        )
    }
}

export default PropertyColumn
