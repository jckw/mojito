import React, { Component } from 'react'
import { QueryRenderer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Subscribe } from 'unstated'
import environment from '../relay/enviroment'

import MapState from '../state/MapState'

class PropertyView extends Component {
    render() {
        return (
            <Subscribe to={[MapState]}>
                {map => (
                    <QueryRenderer
                        environment={environment}
                        query={graphql`
                            query PropertyViewQuery($id: ID!) {
                                property(id: $id) {
                                    street
                                }
                            }
                        `}
                        variables={{ id: map.state.selectedPoint.id }}
                        render={({ error, props }) => {
                            if (error) {
                                console.log(error)
                                return <div>Error!</div>
                            }
                            if (!props) {
                                return <div>Loading...</div>
                            }

                            return <div>{props.property.street}</div>
                        }}
                    />
                )}
            </Subscribe>
        )
    }
}

export default PropertyView
