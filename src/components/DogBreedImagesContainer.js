import React, {Component} from 'react'
import DogBreedImages from './DogBreedImages'
import request from 'superagent'

class DogBreedImagesContainer extends Component {
  state = { images: null }

  componentDidMount() {
    const breed = this.props.match.params.breed
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(res => this.updateImages(res.body.message))
      .catch(console.error)
  }

  updateImages(images) {
    this.setState({
      images: images
    })
  }

  render() {
    return <DogBreedImages name={this.props.match.params.breed} images={ this.state.images } />
  }
}

export default DogBreedImagesContainer;