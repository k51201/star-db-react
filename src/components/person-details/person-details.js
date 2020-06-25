import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService()

  state = {
    person: null,
    error: false,
    loading: true,
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({ loading: true })
      this.updatePerson()
    }
  }

  updatePerson() {
    const { selected } = this.props
    if (selected) {
      this.swapiService.getPerson(selected)
        .then(this.onFetchPerson)
        .catch(this.onError)
    }
  }

  onFetchPerson = person => {
    this.setState({ person, loading: false })
  }

  onError = err => {
    this.setState({ error: true, loading: false })
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from the list</span>
    } else {
      const { person, loading, error } = this.state
      const hasData = person && !(loading || error)

      return hasData ?
        <PersonView person={person} /> :
        (error ? <ErrorIndicator /> : <Spinner />)
    }
  }
}

const PersonView = ({ person: { id, name, gender, birthYear, eyeColor } }) => {
  return (
    <div className="person-details card">
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
