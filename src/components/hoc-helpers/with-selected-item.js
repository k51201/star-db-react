import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'

const withSelectedItem = (View) => class extends Component {
  state = {
    item: null,
    imageUrl: null,
    error: false,
    loading: false,
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
    const { selected, fetchItem, getImageUrl } = this.props
    if (selected) {
      this.setState({ loading: true })
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
    return loading ? <Spinner />
      : error ? <ErrorIndicator />
        : item ? <View item={item} imageUrl={imageUrl} {...this.props} />
          : <span>Select an item from the list</span>
  }
}

export default withSelectedItem
