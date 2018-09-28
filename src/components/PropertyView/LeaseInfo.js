import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Text } from 'rebass'
import parse from 'date-fns/parse'
import format from 'date-fns/format'

class LeaseInfo extends Component {
    render() {
        const { leaseLengthMonths, leaseStartDate } = this.props.property

        if (!leaseLengthMonths && !leaseStartDate) {
            return null
        }

        const _leaseStartDate = leaseStartDate && parse(leaseStartDate, 'yyyy-MM-dd', new Date())

        const leaseLengthMonthsText = leaseLengthMonths ? `${leaseLengthMonths} MONTH LEASE` : ''
        const leaseStartDateText = leaseStartDate
            ? (leaseLengthMonths ? '' : 'LEASE ') +
              `STARTS ${format(_leaseStartDate, 'LLLL do').toUpperCase()}`
            : ''
        const text =
            leaseLengthMonths && leaseStartDate
                ? `${leaseLengthMonthsText} • ${leaseStartDateText}`
                : `${leaseLengthMonthsText}${leaseStartDateText}`

        return (
            <Text
                css={{ letterSpacing: '0.05em' }}
                color="grey.0"
                fontWeight="medium"
                fontSize={0}
                mt={3}
            >
                {text}
            </Text>
        )
    }
}

export default createFragmentContainer(LeaseInfo, {
    property: graphql`
        fragment LeaseInfo_property on PropertyType {
            leaseLengthMonths
            leaseStartDate
        }
    `
})
