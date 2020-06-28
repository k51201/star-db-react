import React from 'react'
import ItemDetails, { ItemField } from '../item-details'
import { withSelectedItem } from '../hoc-helpers'
import SwapiService from '../../services/swapi-service'
import SwImageService from '../../services/sw-image-service'

const { getPerson, getPlanet, getStarship } = new SwapiService()
const { getPersonImageUrl, getPlanetImageUrl, getStarshipImageUrl } = new SwImageService()

const PersonDetails = (props) => {
  const Details = withSelectedItem(ItemDetails, getPerson, getPersonImageUrl)
  return (
    <Details {...props}>
      <ItemField label="Gender" field="gender" />
      <ItemField label="Birth Year" field="birthYear" />
      <ItemField label="Eye Color" field="eyeColor" />
    </Details>
  )
}

const PlanetDetails = (props) => {
  const Details = withSelectedItem(ItemDetails, getPlanet, getPlanetImageUrl)
  return (
    <Details {...props}>
      <ItemField label="Population" field="population" />
      <ItemField label="Rotation period" field="rotationPeriod" />
      <ItemField label="Diameter" field="diameter" />
    </Details>
  )
}

const StarshipDetails = (props) => {
  const Details = withSelectedItem(ItemDetails, getStarship, getStarshipImageUrl)
  return (
    <Details {...props}>
      <ItemField label="Model" field="model" />
      <ItemField label="Manufacturer" field="manufacturer" />
      <ItemField label="Cost in credits" field="costInCredits" />
      <ItemField label="Length" field="length" />
      <ItemField label="Crew" field="crew" />
      <ItemField label="Passengers" field="passengers" />
      <ItemField label="Cargo capacity" field="cargoCapacity" />
    </Details>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
