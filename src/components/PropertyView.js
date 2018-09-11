import React, { Component } from 'react'
import { QueryRenderer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Heading } from 'rebass'
import environment from '../relay/enviroment'

import SelectedPropertyState from '../state/SelectedPropertyState'
import withState from '../utils/withState'

class PropertyView extends Component {
    render() {
        const { properties } = this.props
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query PropertyViewQuery($id: ID!) {
                        property(id: $id) {
                            street
                            area {
                                name
                            }
                            postcode
                        }
                    }
                `}
                variables={{ id: properties.state.selectedProperty.id }}
                render={({ error, props }) => {
                    if (error) {
                        console.log(error)
                        return <div>Error!</div>
                    }
                    if (!props) {
                        return <div>Loading...</div>
                    }

                    return (
                        <Box pt={3}>
                            <Heading fontSize={3}>
                                {props.property.street}, {props.property.area.name},{' '}
                                <span style={{ display: 'inline-block' }}>
                                    {props.property.postcode}
                                </span>
                            </Heading>
                        </Box>
                    )
                }}
            />
        )
    }
}

export default withState(PropertyView, [SelectedPropertyState])
