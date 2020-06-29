import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'

const withData = (View) => class extends Component {
  state = {
    data: [],
    error: false,
    loading: true,
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.props.fetchData()
      .then(data => this.setState({ data, loading: false }))
      .catch(err => this.setState({ error: true, loading: false }))
  }

  render() {
    const { data, error, loading } = this.state
    const hasData = data && !(loading || error)

    return hasData ? <View data={data} {...this.props} /> :
      (loading ? <Spinner /> : <ErrorIndicator />)
  }
}

export default withData
