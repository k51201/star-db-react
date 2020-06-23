export default class SwapiService {
  _apiBase = 'https://swapi.dev/api/'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}.`)
    }

    return await res.json()
  }

  async getAllPeople() {
    const body = await this.getResource('people/')
    return body.results.map(this._transformPerson)
  }

  async getPerson(id) {
    const person = await this.getResource(`people/${id}/`)
    return this._transformPerson(person)
  }

  async getAllPlanets() {
    const body = await this.getResource('planets/')
    return body.results.map(this._transformPlanet)
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}/`)
    return this._transformPlanet(planet)
  }

  async getAllStarships() {
    const body = await this.getResource('starships/')
    return body.results.map(this._transformStarship)
  }

  async getStarship(id) {
    const ship = await this.getResource(`starships/${id}/`)
    return this._transformStarship(ship)
  }

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _transformStarship = ship => {
    return {
      id: this._extractId(ship),
      name: ship.name,
      model: ship.model,
      manufacturer: ship.manufacturer,
      costInCredits: ship.cost_in_credits,
      length: ship.length,
      crew: ship.crew,
      passengers: ship.passengers,
      cargoCapacity: ship.cargo_capacity,
    }
  }

  _extractId(item) {
    const r = /\/([0-9]+)\/$/
    return item.url.match(r)[1]
  }
}