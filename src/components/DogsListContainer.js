import React, {Component} from 'react'
import request from 'superagent'
import DogsList from './DogsList'

export default class DogsListContainer extends Component {
  state = { dogBreeds: null }

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        const breeds = Object.keys(res.body.message)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />
  }
}