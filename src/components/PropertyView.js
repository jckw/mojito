import React, { Component } from 'react'
import { QueryRenderer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Heading, Button } from 'rebass'
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
                render={({ error, props, retry }) => {
                    if (error) {
                        console.log(error)
                        return (
                            <Box>
                                <Heading textAlign="center" mb={3} mx={5}>
                                    Sorry, we're having trouble collecting details for our
                                    properties...
                                </Heading>
                                <Button variant="roundedFilled" onClick={retry}>
                                    Try again
                                </Button>
                            </Box>
                        )
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
