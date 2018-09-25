import React from 'react'
import { Flex } from 'rebass'

export default ({ css, ...props }) => (
    <Flex
        px={3}
        py={3}
        fontSize={2}
        css={{
            borderBottom: '1px solid #E7F2EE',
            borderTop: '1px solid #E7F2EE',
            marginTop: '-1px',
            ...css
        }}
        {...props}
    />
)
