import React, { Component } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import { Flex, Heading, Button } from 'rebass'

import environment from '../relay/enviroment'
import MapListBrowse from '../components/MapListBrowse'

class Search extends Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query SearchQuery {
                        ...MapListBrowse_query
                    }
                `}
                render={({ error, props, retry }) => {
                    if (error) {
                        console.log(error)
                        return (
                            <Flex
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                css={{ height: '100%' }}
                            >
                                <Heading textAlign="center" mb={3} mx={5}>
                                    Sorry, we're having trouble searching for properties...
                                </Heading>
                                <Button variant="roundedFilled" onClick={retry}>
                                    Try again
                                </Button>
                            </Flex>
                        )
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

export default Search
