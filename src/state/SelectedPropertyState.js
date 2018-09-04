import { Container } from 'unstated'

class SelectedPropertyContainer extends Container {
    state = {
        selectedProperty: null
    }

    setSelectedProperty(selectedProperty) {
        this.setState({ selectedProperty })
    }

    unsetSelectedProperty() {
        this.setState({ selectedProperty: null })
    }
}

export default SelectedPropertyContainer
