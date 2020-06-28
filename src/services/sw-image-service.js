export default class SwImageService {
  _urlBase = 'https://starwars-visualguide.com/assets/img/'

  getPersonImageUrl = id => `${this._urlBase}characters/${id}.jpg`
  getPlanetImageUrl = id => `${this._urlBase}planets/${id}.jpg`
  getStarshipImageUrl = id => `${this._urlBase}starships/${id}.jpg`
}