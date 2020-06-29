import React from 'react'

import './item-list.css'

const ItemList = ({ data, children: renderItem, onItemSelected }) => {
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

ItemList.defaultProps = {
  children: ({ name }) => <span>{name}</span>
}

export default ItemList
