import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Container } from 'rebass'

import CostsCard from './CostsCard'
import AgencyCard from './AgencyCard'

class PropertySidebar extends Component {
    render() {
        return (
            <Container maxWidth="17em" flex="1" mx={0} mt={-3} px={0}>
                <CostsCard property={this.props.property} />
                <AgencyCard agency={this.props.property.agency} />
            </Container>
        )
    }
}

export default createFragmentContainer(PropertySidebar, {
    property: graphql`
        fragment PropertySidebar_property on PropertyType {
            ...CostsCard_property
            agency {
                ...AgencyCard_agency
            }
        }
    `
})
