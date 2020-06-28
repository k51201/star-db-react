import React, { Component } from 'react'

import ErrorBoundary from '../error-boundary'
import ItemList from '../item-list'
import ItemDetails, { ItemField } from '../item-details'
import Row from '../row'
import SwapiService from '../../services/swapi-service'
import SwImageService from '../../services/sw-image-service'

import './people-page.css'

export default class PeoplePage extends Component {
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
    const { getAllPeople, getPerson } = this.swapiService
    const { getPersonImageUrl } = this.swImageService

    const itemList = (
      <ItemList
        onItemSelected={this.onSelect}
        fetchData={getAllPeople}
        renderItem={item => item.name}
      />
    )
    const personDetails = (
      <ErrorBoundary>
        <ItemDetails
          selected={selected}
          fetchItem={getPerson}
          getImageUrl={getPersonImageUrl}
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