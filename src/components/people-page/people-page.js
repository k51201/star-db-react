import React, { Component } from 'react'

import ItemList from '../item-list'
import PersonDetails from '../person-details'
import Row from '../row'
import SwapiService from '../../services/swapi-service'

import './people-page.css'
import ErrorBoundary from '../error-boundary'

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
        fetchList={this.swapiService.getAllPeople}
        renderItem={item => item.name}
      />
    )
    const personDetails = (
      <ErrorBoundary>
        <PersonDetails selected={selectedPerson} />
      </ErrorBoundary>
    )

    return <Row left={itemList} right={personDetails} />
  }
}