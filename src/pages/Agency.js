import React, { Component } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import { Heading, Box } from 'rebass'
import environment from '../relay/enviroment'

class Agency extends Component {
    render() {
        const { id } = this.props.match.params

        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query AgencyQuery($id: ID!) {
                        agency(id: $id) {
                            name
                        }
                    }
                `}
                variables={{ id }}
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
                        <Box>
                            <Heading>{props.agency.name}</Heading>
                        </Box>
                    )
                }}
            />
        )
    }
}

export default Agency
