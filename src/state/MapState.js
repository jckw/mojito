import { Container } from 'unstated'

class MapStateContainer extends Container {
    static stateName = 'map'

    state = {
        bounds: undefined,
        after: undefined,
        first: 10
    }

    setBounds({ north, east, south, west }) {
        const bounds = {
            type: 'Polygon',
            coordinates: [
                [[east, north], [west, north], [west, south], [east, south], [east, north]]
            ]
        }

        this.setState({ bounds })
    }

    setAfter(after) {
        this.setState({ after })
    }
}

export default MapStateContainer
