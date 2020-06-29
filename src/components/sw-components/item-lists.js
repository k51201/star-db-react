import React from 'react'
import ItemList from '../item-list'
import { withData, withChildFunction, withServices } from '../hoc-helpers'

const personRender = ({ name, birthYear }) => <span>{name} ({birthYear})</span>
const starshipRender = ({ name, model }) => <span>{name} ({model})</span>

const svcToPeopleProps = ({ swapiService }) => { return { fetchData: swapiService.getAllPeople } }
const svcToPlanetProps = ({ swapiService }) => { return { fetchData: swapiService.getAllPlanets } }
const svcToStarshipProps = ({ swapiService }) => { return { fetchData: swapiService.getAllStarships } }

const PersonList = withServices(svcToPeopleProps)(
  withData(withChildFunction(personRender)(ItemList))
)
const PlanetList = withServices(svcToPlanetProps)(
  withData(withChildFunction()(ItemList))
)
const StarshipList = withServices(svcToStarshipProps)(
  withData(withChildFunction(starshipRender)(ItemList))
)

export {
  PersonList,
  PlanetList,
  StarshipList
}
