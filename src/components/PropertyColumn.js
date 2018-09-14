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
            <Container maxWidth={['600px']} width="100%" px={5} py={2}>
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
