import React, { Component } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import environment from '../relay/enviroment'

import PropertySingle from '../components/PropertySingle'

class Property extends Component {
    render() {
        const { id } = this.props.match.params

        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query PropertyQuery($id: ID!) {
                        property(id: $id) {
                            ...PropertySingle_property
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
                        <div>
                            <PropertySingle property={props.property} />
                        </div>
                    )
                }}
            />
        )
    }
}

export default Property
