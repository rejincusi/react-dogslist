import React from 'react'
import { Link } from 'react-router-dom'

function DogBreedImages(props) {
  const { name, images } = props
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
      This page will show images of the { name } breed.
      <Link to="/">Go back to the index</Link>
      <div>
        {images && images.map(url => <img src={url} alt="Dog" />)}
        {!images && 'Loading...'}
      </div>
    </div>
  )
}

export default DogBreedImages