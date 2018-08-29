import React, { Component } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import environment from '../relay/enviroment'
import PropertyList from '../components/PropertyList'

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
                    console.log(props)
                    return (
                        <div>
                            <PropertyList query={props} />
                        </div>
                    )
                }}
            />
        )
    }
}

export default Home
