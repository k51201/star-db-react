import React from 'react'

const withChildFunction = (Wrapped, func) => (props) => {
  return <Wrapped {...props}>{func}</Wrapped>
}

export default withChildFunction
