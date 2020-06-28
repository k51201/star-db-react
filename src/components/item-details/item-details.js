import React, { Component } from 'react'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-details.css';

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    error: false,
    loading: true,
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({ loading: true })
      this.updateItem()
    }
  }

  updateItem() {
    const { selected, fetchItem } = this.props
    if (selected) {
      fetchItem(selected)
        .then(this.onFetch)
        .catch(this.onError)
    }
  }

  onFetch = item => {
    const { getImageUrl } = this.props
    this.setState({ item, image: getImageUrl(item.id), loading: false })
  }

  onError = err => {
    this.setState({ error: true, loading: false })
  }

  boom() {
    this.a.b = 1
  }

  render() {
    if (!this.state.item) {
      return <span>Select an item from the list</span>
    } else {
      const { item, image, loading, error } = this.state
      const hasData = item && !(loading || error)

      return hasData ?
        <ItemView item={item} image={image} >{this.props.children}</ItemView> :
        (error ? <ErrorIndicator /> : <Spinner />)
    }
  }
}

const ItemField = ({ item, label, field }) => {
  if (item) {
    return (
      <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
      </li>
    )
  } else {
    return null
  }
}

const ItemView = ({ item, image, children }) => {
  const fields = React.Children.map(children, child => {
    return React.cloneElement(child, { item })
  })

  return (
    <div className="item-details card">
      <img className="item-image"
        src={image}
        alt={item.name} />
      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {fields}
        </ul>
        <button
          className="btn btn-warning btn-lg"
          onClick={() => this.boom}>
          Boom!
        </button>
      </div>
    </div>
  )
}

export {
  ItemField
}