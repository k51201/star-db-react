import React, { Component } from 'react'

import ErrorBoundary from '../error-boundary'
import ItemList from '../item-list'
import ItemDetails, { ItemField } from '../item-details'
import Row from '../row'
import SwapiService from '../../services/swapi-service'
import SwImageService from '../../services/sw-image-service'

import './starship-page.css'

export default class StarshipPage extends Component {
  swapiService = new SwapiService()
  swImageService = new SwImageService()

  state = {
    selected: null
  }

  onSelect = id => {
    this.setState({ selected: id })
  }

  render() {
    const { selected } = this.state
    const { getStarship, getAllStarships } = this.swapiService
    const { getStarshipImageUrl } = this.swImageService

    const itemList = (
      <ItemList
        onItemSelected={this.onSelect}
        fetchData={getAllStarships}
        renderItem={item => item.name}
      />
    )
    const shipDetails = (
      <ErrorBoundary>
        <ItemDetails
          selected={selected}
          fetchItem={getStarship}
          getImageUrl={getStarshipImageUrl}
        >
          <ItemField label="Model" field="model" />
          <ItemField label="Manufacturer" field="manufacturer" />
          <ItemField label="Cost in credits" field="costInCredits" />
          <ItemField label="Length" field="length" />
          <ItemField label="Crew" field="crew" />
          <ItemField label="Passengers" field="passengers" />
          <ItemField label="Cargo capacity" field="cargoCapacity" />
        </ItemDetails>
      </ErrorBoundary>
    )

    return <Row left={itemList} right={shipDetails} />
  }
}