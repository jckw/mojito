import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box } from 'rebass'

import PropertyPhoto from './PropertyPhoto'
const MEDIA_URL = 'http://localhost:8000/media/'

class PropertyPhotosContainer extends Component {
    render() {
        const { photos } = this.props.property

        return (
            <Box>
                {photos.edges.map(edge => (
                    <PropertyPhoto src={MEDIA_URL + edge.node.photo} />
                ))}
            </Box>
        )
    }
}

export default createFragmentContainer(PropertyPhotosContainer, {
    property: graphql`
        fragment PropertyPhotosContainer_property on PropertyType {
            photos {
                edges {
                    node {
                        photo
                    }
                }
            }
        }
    `
})
