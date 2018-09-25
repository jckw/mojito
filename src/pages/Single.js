import React, { Component } from 'react'

import PropertyView from '../components/PropertyView'

class Single extends Component {
    render() {
        console.log(this.props.match)
        return <PropertyView {...this.props.match.params} />
    }
}

export default Single
