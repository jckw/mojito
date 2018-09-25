import React, { Component } from 'react'
import { Box, Heading } from 'rebass'

import PhotoHeader from './PhotoHeader'

class Content extends Component {
    render() {
        return (
            <Box>
                <PhotoHeader property={this.props.property} />
                <Heading>Another property.</Heading>
            </Box>
        )
    }
}

export default Content
