import React from 'react'
import { Box } from 'rebass'

export default ({ top, bottom, left, right, ...rest }) => (
    <Box
        css={{
            top: `${top}px`,
            bottom: `${bottom}px`,
            left: `${left}px`,
            right: `${right}px`,
            position: 'absolute'
        }}
        {...rest}
    />
)
