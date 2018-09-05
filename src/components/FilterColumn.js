import React, { Component } from 'react'
import { Container, Card, Flex, Box, Text } from 'rebass'

import people from '../assets/icons/people.svg'
import money from '../assets/icons/money.svg'
import cyclist from '../assets/icons/cyclist.svg'
import Logo from '../assets/Logo.svg'

const FilterField = ({ icon, children }) => (
    <Flex alignItems="center" mb={3}>
        <img src={icon} style={{ height: '1em' }} />
        <Box>{children}</Box>
    </Flex>
)

class PropertyColumn extends Component {
    render() {
        return (
            <Container maxWidth={['200px']} width="100%" bg="green.pale">
                <Box my={3} mx={2}>
                    <img src={Logo} style={{ height: '24px' }} />
                </Box>
                <Card bg="green.grey" p={3} pb={0} mb={3}>
                    <FilterField icon={money} />
                    <FilterField icon={people} />
                    <FilterField icon={cyclist} />
                </Card>
                <Card bg="green.grey" p={3} mb={3}>
                    <Text color="green.dark" fontSize={1}>
                        Looking for advice on how not to get ripped off by an estate agent?
                    </Text>
                </Card>
            </Container>
        )
    }
}

export default PropertyColumn
