import React, { Component } from 'react'

import Header from '../header'
import PeoplePage from '../people-page'
import StarshipPage from '../starship-page'
import RandomPlanet from '../random-planet'
import SwapiService from '../../services/swapi-service'
import SwImageService from '../../services/sw-image-service'
import { ServiceProvider } from '../ctx'

import './app.css'

export default class App extends Component {
  swapiService = new SwapiService()
  swImageService = new SwImageService()

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
    const serviceCtx = {
      swapiService: this.swapiService,
      swImageService: this.swImageService
    }

    return (
      <ServiceProvider value={serviceCtx}>
        <Header />
        {randomPlanet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <PeoplePage />
        <StarshipPage />
      </ServiceProvider>
    )
  }
}
