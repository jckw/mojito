import { Container } from 'unstated'
import geocoder from 'geocoder'

class MapContainer extends Container {
    state = {
        visiblePoints: [],
        selectedPoint: null
    }

    setSelectedPoint(point) {
        this.setState({ selectedPoint: point })
    }

    setSelectedProperty(property) {
        geocoder.geocode(property.postcode, (err, data) => {
            if (err) {
                console.log(err)
                return
            }

            this.setState({ selectedPoint: { ...property, ...data.results[0].geometry.location } })
        })
    }

    unsetSelectedPoint() {
        this.setState({ selectedPoint: null })
    }

    addVisiblePoint(point) {
        if (this.containsPoint(point)) {
            return
        }

        this.setState({ visiblePoints: [point, ...this.state.visiblePoints] })
    }

    containsPoint({ id }) {
        return this.state.visiblePoints.filter(p => p.id === id).length > 0
    }

    addVisiblePointByPostcode(point) {
        if (this.containsPoint(point)) {
            return
        }

        const { postcode } = point

        geocoder.geocode(postcode, (err, data) => {
            if (err) {
                console.log(err)
                return
            }

            this.addVisiblePoint({ ...point, ...data.results[0].geometry.location })
        })
    }
}

export default MapContainer
