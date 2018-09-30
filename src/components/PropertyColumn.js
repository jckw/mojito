import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PropertyList from './PropertyList'
import Container from './Container'

class PropertyColumn extends Component {
    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollTop = 0
    }

    render() {
        const { query } = this.props
        return (
            <Container
                maxWidth={['none', '300px', '600px', '900px']}
                width="100%"
                p={5}
                css={{ overflowY: 'scroll' }}
                m={0}
            >
                <PropertyList query={query} pagination={this.props.pagination} />
            </Container>
        )
    }
}

export default PropertyColumn
