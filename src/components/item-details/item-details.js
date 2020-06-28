import React from 'react'

import './item-details.css'

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

const ItemDetails = ({ item, imageUrl, children }) => {
  const fields = React.Children.map(children, child => {
    return React.cloneElement(child, { item })
  })

  return (
    <div className="item-details card">
      <img className="item-image"
        src={imageUrl}
        alt={item.name} />
      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {fields}
        </ul>
      </div>
    </div>
  )
}

export default ItemDetails
export {
  ItemField
}