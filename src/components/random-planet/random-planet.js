import React, { Component } from 'react'

import Spinner from '../spinner'
import PlanetView from './planet-view'
import ErrorIndicator from '../error-indicator'
import { withServices } from '../hoc-helpers'

import './random-planet.css'

class RandomPlanet extends Component {
  static defaultProps = {
    updInterval: 10000
  }

  state = {
    planet: null,
    loading: true,
    error: false,
  }

  componentDidMount() {
    const { updInterval } = this.props
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, updInterval)
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
    this.props.fetchData(id)
      .then(this.onFetchPlanet)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state
    const { getImageUrl } = this.props

    const hasData = planet && !(loading || error)
    const content = hasData ?
      <PlanetView planet={planet} getImageUrl={getImageUrl} /> :
      (error ? <ErrorIndicator /> : <Spinner />)

    return (
      <div className="random-planet jumbotron rounded">
        {content}
      </div>
    )
  }
}

const svcToProps = ({ swapiService, swImageService }) => {
  return {
    fetchData: swapiService.getPlanet,
    getImageUrl: swImageService.getPlanetImageUrl
  }
}

export default withServices(svcToProps)(RandomPlanet)
