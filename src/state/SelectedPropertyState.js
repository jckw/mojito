import { Container } from 'unstated'

class SelectedPropertyContainer extends Container {
    static stateName = 'properties'

    state = {
        hoveredProperty: null
    }

    setHoveredProperty(hoveredProperty) {
        this.setState({ hoveredProperty })
    }

    unsetHoveredProperty() {
        this.setState({ hoveredProperty: null })
    }
}

export default SelectedPropertyContainer
