import { Container } from 'unstated'

class SelectedPropertyContainer extends Container {
    static stateName = 'properties'

    state = {
        selectedProperty: null,
        hoveredProperty: null
    }

    setSelectedProperty(selectedProperty) {
        this.setState({ selectedProperty })
        this.unsetHoveredProperty()
    }

    unsetSelectedProperty() {
        this.setState({ selectedProperty: null })
    }

    setHoveredProperty(hoveredProperty) {
        this.setState({ hoveredProperty })
    }

    unsetHoveredProperty() {
        this.setState({ hoveredProperty: null })
    }
}

export default SelectedPropertyContainer
