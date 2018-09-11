import React, { Component } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'

import environment from '../relay/enviroment'
import MapListBrowse from '../components/MapListBrowse'

class Home extends Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query HomeQuery {
                        ...MapListBrowse_query
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

                    return <MapListBrowse query={props} />
                }}
            />
        )
    }
}

export default Home
