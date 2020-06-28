import React, { Component } from 'react'

import ErrorBoundary from '../error-boundary'
import ItemList from '../item-list'
import ItemDetails, { ItemField } from '../item-details'
import Row from '../row'
import SwapiService from '../../services/swapi-service'

import './people-page.css'

export default class PeoplePage extends Component {
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
        fetchData={this.swapiService.getAllPeople}
        renderItem={item => item.name}
      />
    )
    const personDetails = (
      <ErrorBoundary>
        <ItemDetails
          selected={selectedPerson}
          fetchItem={this.swapiService.getPerson}
          getImageUrl={id => `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        >
          <ItemField label="Gender" field="gender" />
          <ItemField label="Birth Year" field="birthYear" />
          <ItemField label="Eye Color" field="eyeColor" />
        </ItemDetails>
      </ErrorBoundary>
    )

    return <Row left={itemList} right={personDetails} />
  }
}