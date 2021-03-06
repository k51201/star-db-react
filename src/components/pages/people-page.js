import React, { Component } from 'react'

import ErrorBoundary from '../error-boundary'
import Row from '../row'
import { PersonList, PersonDetails } from '../sw-components'

export default class PeoplePage extends Component {
  state = {
    selected: null
  }

  onSelect = id => {
    this.setState({ selected: id })
  }

  render() {
    const { selected } = this.state

    const itemList = <PersonList onItemSelected={this.onSelect} />
    const personDetails = (
      <ErrorBoundary>
        <PersonDetails selected={selected} />
      </ErrorBoundary>
    )

    return <Row left={itemList} right={personDetails} />
  }
}
