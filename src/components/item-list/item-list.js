import React from 'react'
import { withData } from '../hoc-helpers'

import './item-list.css'

const ItemList = ({ data, renderItem, onItemSelected }) => {
  const listItems = data.map(item => {
    const { id } = item
    return (
      <li className="list-group-item"
        key={item.id}
        onClick={() => onItemSelected(id)}
      >
        {renderItem(item)}
      </li>
    )
  })

  return (
    <ul className="item-list list-group">
      {listItems}
    </ul>
  )
}

export default withData(ItemList)