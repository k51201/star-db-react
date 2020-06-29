import React, { Component } from 'react'

import ErrorBoundary from '../error-boundary'
import Row from '../row'
import { PlanetList, PlanetDetails } from '../sw-components'

export default class PlanetPage extends Component {
  state = {
    selected: null
  }

  onSelect = id => {
    this.setState({ selected: id })
  }

  render() {
    const { selected } = this.state

    const itemList = <PlanetList onItemSelected={this.onSelect} />
    const planetDetails = (
      <ErrorBoundary>
        <PlanetDetails selected={selected} />
      </ErrorBoundary>
    )

    return <Row left={itemList} right={planetDetails} />
  }
}
