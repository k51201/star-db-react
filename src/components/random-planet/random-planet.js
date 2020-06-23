import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import PlanetView from './planet-view'
import ErrorIndicator from '../error-indicator'

import './random-planet.css'

export default class RandomPlanet extends Component {
  swapiService = new SwapiService()

  state = {
    planet: null,
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onFetchPlanet = planet => {
    this.setState({ planet, loading: false })
  }

  onError = err => {
    this.setState({ error: true, loading: false })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2
    this.swapiService
      .getPlanet(id)
      .then(this.onFetchPlanet)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state

    const hasData = planet && !(loading || error)
    const content = hasData ?
      <PlanetView planet={planet} /> : (error ? <ErrorIndicator /> : <Spinner />)

    return (
      <div className="random-planet jumbotron rounded">
        {content}
      </div>
    )
  }
}
