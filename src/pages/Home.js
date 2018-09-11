import React, { Component } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'

import environment from '../relay/enviroment'
import withState from '../utils/withState'
import MapState from '../state/MapState'
import MapListBrowse from '../components/MapListBrowse'

class Home extends Component {
    render() {
        const { map } = this.props
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query HomeQuery($geometry: Geometry, $first: Int!) {
                        ...PropertyList_query @arguments(geometry: $geometry, first: $first)
                        ...MarkerSet_query @arguments(geometry: $geometry, first: $first)
                    }
                `}
                variables={{
                    geometry: JSON.stringify(map.state.bounds),
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

                    return <MapListBrowse query={props} />
                }}
            />
        )
    }
}

export default withState(Home, [MapState])
