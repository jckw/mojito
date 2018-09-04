import React, { Component } from 'react'
import { Subscribe } from 'unstated'
import { Container } from 'rebass'

import PropertyView from './PropertyView'
import PropertyList from './PropertyList'

import SelectedPropertyState from '../state/SelectedPropertyState'

class MapSidebar extends Component {
    render() {
        const { query } = this.props
        return (
            <Subscribe to={[SelectedPropertyState]}>
                {properties => (
                    <Container maxWidth={['400px']} width="100%">
                        {properties.state.selectedProperty !== null ? (
                            <PropertyView />
                        ) : (
                            <PropertyList query={query} />
                        )}
                    </Container>
                )}
            </Subscribe>
        )
    }
}

export default MapSidebar
