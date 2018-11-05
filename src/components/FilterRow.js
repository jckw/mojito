import React, { Component } from 'react'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Box } from 'rebass'

import FilterRange from './FilterRange'
import FilterSelect from './FilterSelect'
import Absolute from './Absolute'
import TopRow from './TopRow'
import SelectedLandmarkState from '../state/SelectedLandmarkState'
import withState from '../utils/withState'

class FilterRow extends Component {
    constructor(props) {
        super(props)

        const { minPrice, maxPrice, minBedrooms, maxBedrooms, landmarks } = props.query.meta

        this.PRICE_RANGE = [minPrice, maxPrice]
        this.BEDROOMS_RANGE = [minBedrooms, maxBedrooms]

        this.state = {
            priceSet: false,
            priceRange: this.PRICE_RANGE,
            showPriceInput: false,
            bedroomsSet: false,
            bedroomsRange: this.BEDROOMS_RANGE,
            showBedroomsInput: false,
            landmark: landmarks.edges[0].node,
            landmarks: landmarks.edges.map(({ node }) => node)
        }

        this.updateGlobalState()
    }

    closeInputs = () => {
        const { refetch } = this.props
        const { priceSet, bedroomsSet } = this.state

        this.setState({ showPriceInput: false, showBedroomsInput: false })

        const [minPrice, maxPrice] = this.state.priceRange
        const [minBedrooms, maxBedrooms] = this.state.bedroomsRange

        const data = {
            minPrice: priceSet ? minPrice : undefined,
            maxPrice: priceSet ? maxPrice : undefined,
            minBedrooms: bedroomsSet ? minBedrooms : undefined,
            maxBedrooms: bedroomsSet ? maxBedrooms : undefined
        }

        refetch(data)
    }

    onPriceChange = priceRange => {
        this.setState({ priceRange, priceSet: true })
    }

    unsetPrice = () => {
        this.setState({ priceSet: false }, this.closeInputs)
    }

    openPriceInput = () => {
        this.setState({ showPriceInput: true, priceSet: true })
    }

    onBedroomsChange = bedroomsRange => {
        this.setState({ bedroomsRange, bedroomsSet: true })
    }

    unsetBedrooms = () => {
        this.setState({ bedroomsSet: false }, this.closeInputs)
    }

    openBedroomsInput = () => {
        this.setState({ showBedroomsInput: true, bedroomsSet: true })
    }

    onLandmarkChange = event => {
        const selectedLandmarkId = event.target.value
        const selectedLandmark = this.state.landmarks.filter(
            ({ id }) => id === selectedLandmarkId
        )[0]

        this.setState({ landmark: selectedLandmark }, this.updateGlobalState)
    }

    updateGlobalState = () => {
        const { landmark } = this.props

        landmark.setSelectedLandmark(this.state.landmark)
    }

    render() {
        return (
            <Box>
                {(this.state.showPriceInput || this.state.showBedroomsInput) && (
                    <Absolute
                        top={0}
                        bottom={0}
                        left={0}
                        right={0}
                        bg="rgba(255, 255, 255, 0.8)"
                        css={{ zIndex: 2 }}
                        onClick={this.closeInputs}
                    />
                )}
                <TopRow
                    flexDirection="row"
                    justifyContent="flex-end"
                    css={{
                        zIndex: 2,
                        position: 'relative'
                    }}
                >
                    <FilterSelect
                        showingInput={this.state.showPriceInput}
                        selectedNode={this.state.landmark}
                        onChange={this.onLandmarkChange}
                        preText="Distances to "
                        getText={node => node.name}
                        isSet={true}
                        onClose={this.closeInputs}
                        options={this.state.landmarks}
                    />
                    <FilterRange
                        name="Price per person"
                        showingInput={this.state.showPriceInput}
                        value={this.state.priceRange}
                        onChange={this.onPriceChange}
                        onUnset={this.unsetPrice}
                        onClick={this.openPriceInput}
                        formatTo={value => `£${value[0]} - £${value[1]} pp`}
                        isSet={this.state.priceSet}
                        min={this.PRICE_RANGE[0]}
                        max={this.PRICE_RANGE[1]}
                        step={10}
                        onClose={this.closeInputs}
                    />
                    <FilterRange
                        name="Bedrooms"
                        showingInput={this.state.showBedroomsInput}
                        value={this.state.bedroomsRange}
                        onChange={this.onBedroomsChange}
                        onUnset={this.unsetBedrooms}
                        onClick={this.openBedroomsInput}
                        formatTo={value => `${value[0]} to ${value[1]} bedrooms`}
                        isSet={this.state.bedroomsSet}
                        min={this.BEDROOMS_RANGE[0]}
                        max={this.BEDROOMS_RANGE[1]}
                        onClose={this.closeInputs}
                    />
                </TopRow>
            </Box>
        )
    }
}

export default createFragmentContainer(withState(FilterRow, [SelectedLandmarkState]), {
    query: graphql`
        fragment FilterRow_query on Query {
            meta {
                maxBedrooms
                minBedrooms
                maxPrice
                minPrice
                landmarks {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
            }
        }
    `
})
