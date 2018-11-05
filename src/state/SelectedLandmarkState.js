import { Container } from 'unstated'

class SelectedLandmarkContainer extends Container {
    static stateName = 'landmark'

    state = {
        selectedLandmark: null
    }

    setSelectedLandmark(landmarkNode) {
        this.setState({ selectedLandmark: landmarkNode })
    }
}

export default SelectedLandmarkContainer
