import React from 'react'
import { Flex, Card, Text } from 'rebass'

const FeatureSquare = ({ value, name, icon }) => (
    <Card
        boxShadow="0 11px 16px -12px rgba(84,146,124,0.50)"
        py={3}
        px={4}
        borderRadius={3}
        bg="#64AC92"
        color="white"
        css={{ minWidth: '120px' }}
        mr={4}
    >
        <Flex justifyContent="space-between" alignItems="center" mb={3}>
            <img src={icon} />
            <Text mr={2} fontWeight="bold" fontSize={5}>
                ×{value}
            </Text>
        </Flex>
        <Text fontSize={1} fontWeight="medium">
            {name}
        </Text>
    </Card>
)

export default FeatureSquare
