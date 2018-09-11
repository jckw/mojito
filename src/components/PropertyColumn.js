import React, { Component } from 'react'
import { Container } from 'rebass'

import PropertyView from './PropertyView'
import PropertyList from './PropertyList'

import SelectedPropertyState from '../state/SelectedPropertyState'
import withState from '../utils/withState'

class PropertyColumn extends Component {
    render() {
        const { query, properties } = this.props
        return (
            <Container maxWidth={['600px']} width="100%">
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
