import React, { Component } from 'react'
import { QueryRenderer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Heading, Button } from 'rebass'
import environment from '../../relay/enviroment'

import Content from './Content'
import Header from '../../components/Header'

class PropertyView extends Component {
    render() {
        const { propertySlug, citySlug, areaSlug } = this.props

        return (
            <Box>
                <Header />
                <QueryRenderer
                    environment={environment}
                    query={graphql`
                        query PropertyViewQuery(
                            $propertySlug: String!
                            $citySlug: String!
                            $areaSlug: String!
                        ) {
                            property(
                                propertySlug: $propertySlug
                                citySlug: $citySlug
                                areaSlug: $areaSlug
                            ) {
                                ...Content_property
                            }
                        }
                    `}
                    variables={{ propertySlug, citySlug, areaSlug }}
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

                        return <Content property={props.property} />
                    }}
                />
            </Box>
        )
    }
}

export default PropertyView
