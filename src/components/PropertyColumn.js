import React, { Component } from 'react'

import PropertyView from './PropertyView'
import PropertyList from './PropertyList'
import Container from './Container'

import SelectedPropertyState from '../state/SelectedPropertyState'
import withState from '../utils/withState'

class PropertyColumn extends Component {
    render() {
        const { query, properties } = this.props
        return (
            <Container
                maxWidth={['300px', '300px', '600px', '900px']}
                width="100%"
                p={5}
                css={{ overflowY: 'scroll' }}
            >
                {properties.state.selectedProperty !== null ? (
                    <PropertyView />
                ) : (
                    <PropertyList query={query} />
                )}
            </Container>
        )
    }
}

export default withState(PropertyColumn, [SelectedPropertyState])
