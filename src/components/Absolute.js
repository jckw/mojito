import React from 'react'
import { Box } from 'rebass'

const getValue = value => (typeof value === 'number' ? `${value}px` : value)

export default ({ top, bottom, left, right, css, ...rest }) => (
    <Box
        css={{
            top: getValue(top),
            right: getValue(right),
            bottom: getValue(bottom),
            left: getValue(bottom),
            position: 'absolute',
            ...css
        }}
        {...rest}
    />
)
