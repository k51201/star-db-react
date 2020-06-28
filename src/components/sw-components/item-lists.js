import React from 'react'
import ItemList from '../item-list'
import { withData, withChildFunction } from '../hoc-helpers'
import SwapiService from '../../services/swapi-service'

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService()

const personRender = ({ name, birthYear }) => <span>{name} ({birthYear})</span>
const planetRender = ({ name }) => <span>{name}</span>
const starshipRender = ({ name, model }) => <span>{name} ({model})</span>

const PersonList = withData(withChildFunction(ItemList, personRender), getAllPeople)
const PlanetList = withData(withChildFunction(ItemList, planetRender), getAllPlanets)
const StarshipList = withData(withChildFunction(ItemList, starshipRender), getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}
