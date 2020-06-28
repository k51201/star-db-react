import React, { Component } from 'react'

import ErrorBoundary from '../error-boundary'
import ItemList from '../item-list'
import ItemDetails, { ItemField } from '../item-details'
import Row from '../row'
import SwapiService from '../../services/swapi-service'

import './starship-page.css'

export default class StarshipPage extends Component {
  swapiService = new SwapiService()

  state = {
    selectedPerson: null
  }

  onPersonSelected = id => {
    this.setState({ selectedPerson: id })
  }

  render() {
    const { selectedPerson } = this.state

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        fetchData={this.swapiService.getAllStarships}
        renderItem={item => item.name}
      />
    )
    const shipDetails = (
      <ErrorBoundary>
        <ItemDetails
          selected={selectedPerson}
          fetchItem={this.swapiService.getStarship}
          getImageUrl={id => `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
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