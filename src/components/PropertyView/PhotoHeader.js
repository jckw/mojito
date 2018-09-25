import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box } from 'rebass'
import styled from 'styled-components'
import { height } from 'styled-system'

import getPhotoURL from '../../utils/getPhotoURL'

const HeightBox = styled(Box)`
    ${height};
`

class PhotoHeader extends Component {
    render() {
        const { photos } = this.props.property
        if (photos.edges.length < 1) {
            return null
        }

        return (
            <HeightBox width="100%" height={['250px', '350px', '550px']}>
                <img
                    src={getPhotoURL(photos.edges[0].node.photo)}
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
            </HeightBox>
        )
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
