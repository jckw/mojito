import React, { Component } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import { Flex } from 'rebass'

import environment from '../relay/enviroment'
import PropertyList from '../components/PropertyList'
import MapView from '../components/MapView'

class Home extends Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query HomeQuery {
                        ...PropertyList_query
                    }
                `}
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
                            <PropertyList query={props} />
                            <MapView />
                        </Flex>
                    )
                }}
            />
        )
    }
}

export default Home
