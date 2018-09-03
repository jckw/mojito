import { Container } from 'unstated'

class VisiblePropertiesContainer extends Container {
    state = {
        visibleProperties: [],
        selectedProperty: null
    }

    setSelectedProperty(selectedProperty) {
        this.setState({ selectedProperty })
    }

    unsetSelectedProperty() {
        this.setState({ selectedProperty: null })
    }

    addVisibleProperty(property) {
        if (this.containsProperty(property)) {
            return
        }

        this.setState({ visibleProperties: [property, ...this.state.visibleProperties] })
    }

    containsProperty({ id }) {
        return this.state.visibleProperties.filter(p => p.id === id).length > 0
    }
}

export default VisiblePropertiesContainer
