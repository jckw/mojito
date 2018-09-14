import React from 'react'
import { Box } from 'rebass'

export default ({ css, ...rest }) => <Box css={{ position: 'relative', ...css }} {...rest} />
