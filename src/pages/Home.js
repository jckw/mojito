import React, { Component } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import { Flex } from 'rebass'

import environment from '../relay/enviroment'
import MapView from '../components/MapView'
import PropertyColumn from '../components/PropertyColumn'
import withState from '../utils/withState'
import MapState from '../state/MapState'

class Home extends Component {
    render() {
        const { map } = this.props
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query HomeQuery($geometry: Geometry, $first: Int!) {
                        ...PropertyList_query @arguments(geometry: $geometry, first: $first)
                        ...MapView_query @arguments(geometry: $geometry, first: $first)
                    }
                `}
                variables={{
                    geometry: JSON.stringify(map.state.geometry),
                    first: map.state.first
                }}
                render={({ error, props }) => {
                    if (error) {
                        console.log(error)
                        return <div>Error!</div>
                    }
                    if (!props) {
                        return <div>Loading...</div>
                    }

                    return (
                        <Flex flex={1} flexDirection="row" css={{ height: '100%' }}>
                            <MapView query={props} />
                            <PropertyColumn query={props} />
                        </Flex>
                    )
                }}
            />
        )
    }
}

export default withState(Home, [MapState])
