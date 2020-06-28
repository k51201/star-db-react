import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'

const withSelectedItem = (View, fetchItem, getImageUrl) => class extends Component {
  state = {
    item: null,
    imageUrl: null,
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
    const { selected } = this.props
    if (selected) {
      fetchItem(selected)
        .then(item => this.setState({
          item,
          imageUrl: getImageUrl(item.id),
          loading: false
        }))
        .catch(err => this.setState({ error: true, loading: false }))
    }
  }

  render() {
      const { item, imageUrl, loading, error } = this.state
    if (!item) {
      return <span>Select an item from the list</span>
    } else {
      const hasData = item && !(loading || error)

      return hasData ? <View item={item} imageUrl={imageUrl} {...this.props} /> :
        (error ? <ErrorIndicator /> : <Spinner />)
    }
  }
}

export default withSelectedItem
