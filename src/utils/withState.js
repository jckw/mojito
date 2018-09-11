import React from 'react'
import { Subscribe } from 'unstated'

export default (Component, states) => {
    return props => (
        <Subscribe to={states}>
            {(...s) => {
                const r = {}
                s.map((x, i) => (r[states[i].stateName] = x))

                return <Component {...r} {...props} />
            }}
        </Subscribe>
    )
}
