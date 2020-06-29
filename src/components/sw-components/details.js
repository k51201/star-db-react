import React from 'react'
import ItemDetails, { ItemField } from '../item-details'
import { withSelectedItem, withServices } from '../hoc-helpers'

const PersonDetails = (props) => {
  const serviceToProps = ({ swapiService, swImageService }) => {
    return {
      fetchItem: swapiService.getPerson,
      getImageUrl: swImageService.getPersonImageUrl
    }
  }
  const Details = withServices(serviceToProps)(withSelectedItem(ItemDetails))
  return (
    <Details {...props}>
      <ItemField label="Gender" field="gender" />
      <ItemField label="Birth Year" field="birthYear" />
      <ItemField label="Eye Color" field="eyeColor" />
    </Details>
  )
}

const PlanetDetails = (props) => {
  const serviceToProps = ({ swapiService, swImageService }) => {
    return {
      fetchItem: swapiService.getPlanet,
      getImageUrl: swImageService.getPlanetImageUrl
    }
  }
  const Details = withServices(serviceToProps)(withSelectedItem(ItemDetails))
  return (
    <Details {...props}>
      <ItemField label="Population" field="population" />
      <ItemField label="Rotation period" field="rotationPeriod" />
      <ItemField label="Diameter" field="diameter" />
    </Details>
  )
}

const StarshipDetails = (props) => {
  const serviceToProps = ({ swapiService, swImageService }) => {
    return {
      fetchItem: swapiService.getStarship,
      getImageUrl: swImageService.getStarshipImageUrl
    }
  }
  const Details = withServices(serviceToProps)(withSelectedItem(ItemDetails))
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
