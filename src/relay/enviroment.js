import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const RELAY_ENDPOINT =
    process.env.NODE_ENV === 'production'
        ? 'https://app.movemaison.com/graphql'
        : 'http://127.0.0.1:8000/graphql'

function fetchQuery(operation, variables) {
    return fetch(RELAY_ENDPOINT, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    }).then(response => {
        return response.json()
    })
}

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource())
})

export default environment
