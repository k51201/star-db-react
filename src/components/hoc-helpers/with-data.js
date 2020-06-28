import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'

const withData = (View, fetchData) => class extends Component {
  state = {
    data: [],
    error: false,
  }

  componentDidMount() {
    fetchData()
      .then(data => this.setState({ data }))
      .catch(err => this.setState({ error: true }))
  }

  render() {
    const { data, error } = this.state

    if (error) {
      return <ErrorIndicator />
    } else if (!data) {
      return <Spinner />
    } else {
      return <View data={data} {...this.props} />
    }
  }
}

export default withData
