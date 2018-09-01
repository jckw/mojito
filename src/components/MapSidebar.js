import React, { Component } from 'react'
import { Subscribe } from 'unstated'
import { Container } from 'rebass'

import PropertyView from './PropertyView'
import PropertyList from './PropertyList'

import MapState from '../state/MapState'

class MapSidebar extends Component {
    render() {
        const { query } = this.props
        return (
            <Subscribe to={[MapState]}>
                {map => (
                    <Container maxWidth={['400px']} width="100%">
                        {map.state.selectedPoint !== null ? (
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
