import React, { Component } from 'react'

import ErrorBoundary from '../error-boundary'
import Row from '../row'
import { StarshipList, StarshipDetails } from '../sw-components'

export default class StarshipPage extends Component {
  state = {
    selected: null
  }

  onSelect = id => {
    this.setState({ selected: id })
  }

  render() {
    const { selected } = this.state

    const itemList = <StarshipList onItemSelected={this.onSelect} />
    const shipDetails = (
      <ErrorBoundary>
        <StarshipDetails selected={selected} />
      </ErrorBoundary>
    )

    return <Row left={itemList} right={shipDetails} />
  }
}
