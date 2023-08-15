import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InputDetails from '../InputDetails/InputDetails'
import './CityDetailsCard.css'
import axios from 'axios'

function CityDetailsCard() {

    //This page shows the properties within a specific city
  const {cityId} = useParams()
  const [city, setCity] = useState('')
  const [cityProperties, setCityProperties] = useState([])
  
  // https://unilife-server.herokuapp.com/properties/city/633a96af6893d471a68cc88f
  useEffect(() => {
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
      .then(res => {
          console.log(res.data)
          setCity(res.data.city_name)
      })
      .catch(err=>console.log(err))
  }, [])

  return (
     <div>
        <div className='property-cards-container'>
        {cityProperties.map(property => (
          <div key={property._id} className='property-card'>
            <img className='property-img' src={property.images[0]} alt={property.name} />
            <p>{property.address.street}</p>
            <p>{property.availability}</p>
          </div>
        ))}
      </div>
     </div>
  )
}

export default CityDetailsCard