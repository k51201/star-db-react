import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import SwapiService from '../../services/swapi-service'
import SwImageService from '../../services/sw-image-service'
import { PeoplePage, PlanetPage, StarshipPage } from '../pages'
import { ServiceProvider } from '../ctx'

import './app.css'

export default class App extends Component {
  swapiService = new SwapiService()
  swImageService = new SwImageService()

  render() {
    const serviceCtx = {
      swapiService: this.swapiService,
      swImageService: this.swImageService
    }

    return (
      <ServiceProvider value={serviceCtx}>
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <PlanetPage />
        <StarshipPage />
      </ServiceProvider>
    )
  }
}
