import React, { Component } from 'react'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
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
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            fetchList={this.swapiService.getAllPeople}
            renderItem={item => item.name}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails selected={selectedPerson} />
        </div>
      </div>
    )
  }
}