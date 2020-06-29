import React from 'react'
import { ServiceConsumer } from '../ctx'

const withServices = mapToProps => Wrapped => props => {
  return (
    <ServiceConsumer>
      {(services) => <Wrapped {...props} {...mapToProps(services)} />}
    </ServiceConsumer>
  )
}

export default withServices
