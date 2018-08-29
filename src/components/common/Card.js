import React, { Component } from 'react'
import { Card as RebassCard } from 'rebass'

class Card extends Component {
    render() {
        return (
            <RebassCard borderRadius={3} py={4} px={4} m={2} boxShadow="normal" {...this.props}>
                {this.props.children}
            </RebassCard>
        )
    }
}

export default Card
