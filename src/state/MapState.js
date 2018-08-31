import { Container } from 'unstated'

class MapContainer extends Container {
    state = {
        visiblePoints: [],
        selectedPoint: null
    }

    addVisiblePoint(point) {
        const containsPoint = this.state.visiblePoints.filter(p => p.id === point.id).length > 0

        if (containsPoint) {
            return
        }

        this.setState({ visiblePoints: [point, ...this.state.visiblePoints] })
    }
}

export default MapContainer
