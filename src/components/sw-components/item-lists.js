import React from 'react'
import ItemList from '../item-list'
import { withData, withChildFunction, withServices } from '../hoc-helpers'

const personRender = ({ name, birthYear }) => <span>{name} ({birthYear})</span>
const planetRender = ({ name }) => <span>{name}</span>
const starshipRender = ({ name, model }) => <span>{name} ({model})</span>

const PersonList = withServices(
  withData(withChildFunction(ItemList, personRender)),
  ({ swapiService }) => { return { fetchData: swapiService.getAllPeople } }
)
const PlanetList = withServices(
  withData(withChildFunction(ItemList, planetRender)),
  ({ swapiService }) => { return { fetchData: swapiService.getAllPlanets } }
)
const StarshipList = withServices(
  withData(withChildFunction(ItemList, starshipRender)),
  ({ swapiService }) => { return { fetchData: swapiService.getAllStarships } }
)

export {
  PersonList,
  PlanetList,
  StarshipList
}
