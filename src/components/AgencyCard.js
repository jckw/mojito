import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box, Heading } from 'rebass'
import { Link } from 'react-router-dom'

import Card from './common/Card'

class AgencyCard extends Component {
    render() {
        const { id, name } = this.props.agency

        return (
            <Link to={`/agency/${id}`} style={{ textDecoration: 'none', color: '#3d3d3d' }}>
                <Card>
                    <Box>
                        <Heading fontSize={2}>{name}</Heading>
                    </Box>
                </Card>
            </Link>
        )
    }
}

export default createFragmentContainer(AgencyCard, {
    agency: graphql`
        fragment AgencyCard_agency on LettingAgencyType {
            id
            name
        }
    `
})
