import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import InputDetails from '../../components/InputDetails/InputDetails'
import locationIcon from '../../assets/location-icon.png';
import CityDetailsCard from '../../components/CityDetailsCard/CityDetailsCard'
import BeingAStudent from '../../components/BeingAStudent/BeingAStudent';
import { MdOutlineBed, MdOutlineBathtub } from "react-icons/md";
import { GoHome } from "react-icons/go";
import './CityDetailsPage.css'
import { Link } from 'react-router-dom';
import axios from 'axios'


function CityDetailsPage() {

  //This page shows the properties within a specific city
  const {cityId} = useParams()
  const [city, setCity] = useState('')
  const [cityProperties, setCityProperties] = useState([])
  const [propertyCount, setPropertyCount] = useState(0); // State to store property count


  const updatePropertyCount = (count) => {
    setPropertyCount(count);
  };

  // https://unilife-server.herokuapp.com/properties/city/633a96af6893d471a68cc88f
  useEffect(() => {
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
      .then(res => {
        console.log(res.data)
        if(res.data.message && res.data.message === 'Invalid city id') {
            throw new Error("data not available")
        }
        setCity(res.data.city_name)
        setCityProperties(res.data.response); // Set city properties from response array
        setPropertyCount(res.data.total); // Set property count from the total field
      })
      .catch(err=>console.log(err))
    }, [cityId])
  
  return (
    <div>
      <div className='banner-container'>
      <Banner
        title={"Search Accommodation"}
        body={"Whatever you’re after, we can help you find the right student accommodation for you."}
      >
        <img
           className="city-banner-img"
           style={{
             width: "100%",
             height: "500px",
             borderRadius: "24px"
           }}
        />
      </Banner>
       <InputDetails cityId={cityId} setPropertyData={setCityProperties} updatePropertyCount={updatePropertyCount}/>
      </div>
      <div>
        <p className="property-count">{`${propertyCount} homes in ${city}`}</p>
      </div>
      <div className='property-cards-container'>
        {cityProperties.map(property => (
          <div key={property._id} className='property-card'>
            <img className='property-img' src={property.images[0]} alt={property.name} />
            <div className='property-price-bed-bath-container'>
              <div className='property-price-container'>
                <p>&pound;{property.deposit}</p>
                <p>pppw including bills</p>
              </div>
              <div className='property-bed-bath-container'>
                <div className='property-bedroom-container'>
                  <MdOutlineBed />
                  <p>{property.bedroom_count}</p>
                </div>
                <div className='property-bathroom-container'>
                  <MdOutlineBathtub />
                  <p>{property.bathroom_count}</p>
                </div>
              </div>
            </div>
            <div className='property-info-container'>
               <div className='property-detached-furnished-container'>
                  <p>{property.property_type}</p>
                  <p>{property.furnished}</p>
               </div>
               <div className='property-location-container'>
                  <img className='location-icon' src={locationIcon} alt="Location icon image" />
                  <p>{`${property.address.street},${property.address.city},${property.address.postcode}`}</p>
               </div>
            </div>
            <div className='property-view-home-link-container'>
                  <GoHome />
                  <Link to={`/property/${property._id}`}>View Home</Link>
            </div>
          </div>
        ))}
      </div>
      <BeingAStudent />
    </div>
  )
}

export default CityDetailsPage