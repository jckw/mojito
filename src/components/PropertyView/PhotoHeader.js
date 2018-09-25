import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'

import getPhotoURL from '../../utils/getPhotoURL'

class PhotoHeader extends Component {
    render() {
        const { photos } = this.props.property
        if (photos.edges.length < 1) {
            return null
        }

        return <img src={getPhotoURL(photos.edges[0].node.photo)} />
    }
}

export default createFragmentContainer(PhotoHeader, {
    property: graphql`
        fragment PhotoHeader_property on PropertyType {
            photos(first: 1) {
                edges {
                    node {
                        photo
                    }
                }
            }
        }
    `
})
