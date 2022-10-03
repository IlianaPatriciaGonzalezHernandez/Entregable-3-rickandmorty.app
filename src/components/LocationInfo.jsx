import React from 'react'
import './styles/locationInfo.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const LocationInfo = ({location}) => {

  return (
    <article className='card__location'>
      <div className='card__container-location' >
        <a className='card__location-item'><span className='card__location-title'>Name: </span>{location?.name} </a>
        <a className='card__location-item'><span className='card__location-title'>Type: </span>{location?.type}</a>
        <a className='card__location-item'><span className='card__location-title'>Dimension: </span>{location?.dimension}</a>
        <a className='card__location-item'><span className='card__location-title'>Population: </span>{location?.residents.length} </a>
      </div>

    </article>
  )
}

export default LocationInfo