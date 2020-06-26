import React, { Component } from 'react'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './item-list.css'

export default class ItemList extends Component {
  state = {
    items: [],
    error: false,
  }

  componentDidMount() {
    this.props.fetchList()
      .then(items => {
        this.setState({ items })
      })
      .catch(this.onError)
  }

  onError = err => {
    this.setState({ error: true })
  }

  renderItems(arr) {
    const { renderItem } = this.props
    return arr.map(item => {
      const { id } = item
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {renderItem(item)}
        </li>
      )
    })
  }

  render() {
    const { items, error } = this.state

    if (error) {
      return <ErrorIndicator />
    } else if (!items) {
      return <Spinner />
    }

    const listItems = this.renderItems(items)

    return (
      <ul className="item-list list-group">
        {listItems}
      </ul>
    )
  }
}