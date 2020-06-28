import React, { Component } from 'react'

import Header from '../header'
import PeoplePage from '../people-page'
import StarshipPage from '../starship-page'
import RandomPlanet from '../random-planet'

import './app.css'

export default class App extends Component {
  state = {
    showRandomPlanet: true,
  }

  toggleRandomPlanet = () => {
    this.setState(({ showRandomPlanet }) => {
      return { showRandomPlanet: !showRandomPlanet }
    })
  }

  render() {
    const { showRandomPlanet } = this.state
    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null

    return (
      <div>
        <Header />
        {randomPlanet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <PeoplePage />
        <StarshipPage />
      </div>
    )
  }
}
