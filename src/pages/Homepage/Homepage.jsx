import { useState, useEffect } from 'react';
import './Homepage.css'
import Banner from '../../components/Banner/Banner';
import CityCard from './../../components/CityCard/CityCard';
import CompareHomes from './../../components/CompareHomes/CompareHomes';
import bestSelectionIcon from '../../assets/best-selection-icon.png'
import yourFavoriteIcon from '../../assets/your-favorite-icon.png'
import manOnPhoneImg from '../../assets/man-on-phone-img.png'
import { Link } from 'react-router-dom';
import axios from 'axios'
import InputHome from './../../components/InputHome/InputHome';

function Homepage({cityId}) {

    // Create state to hold the cities
    const [cities, setCities] = useState([])

    // https://unilife-server.herokuapp.com/cities?
  
    useEffect(() => {
      axios.get(`https://unilife-server.herokuapp.com/cities?`)
      .then(res => {
          setCities(res.data.response)
      })
      .catch(err => console.log(err))
    }, [])
  
    
  return (
    <div>
        <div className='banner-container'>
          <Banner title={"Find student homes with bills included"} body={"A simple and faster way to search for student accommodation"}/>
          <InputHome /> 
          <p className='student-text'>Student accommodations in our top cities</p>    
        </div>
        <div className='city-cards-container'>
           {
               cities.map(item=><CityCard key={item.id} city={item}/>)
           }
        </div>
        <div className='homepage-see-all-cities-link'>
          <a href="/seeallcities">See All Cities</a>
        </div>
        <CompareHomes />
        <div className='homepage-search-compare-desktop-main-container'>
          <div className='homepage-search-compare-left-column'>
            <div className='homepage-search-compare-text-container'>
              <img className='search-compare-icon' src={bestSelectionIcon} alt="icon of a hand holding a coin" />
              <div className='homepage-search-compare-text'>
                <p className='title-text'>Best selection</p>
                <p className='homepage-search-compare-details-text'>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
              </div>
            </div>
            <div className='homepage-search-compare-text-container'>
            <img className='search-compare-icon' src={yourFavoriteIcon} alt="icon of a heart" />
              <div className='homepage-search-compare-text'>
                <p className='title-text'>Your favorite</p>
                <p className='homepage-search-compare-details-text'>Shortlist your favourite properties and send enquiries in one click.</p>
              </div>
            </div>
            <div className='homepage-search-compare-link'>
              <Link to={`/citydetailspage/${cityId}`}>Search and Compare</Link>
            </div>
          </div>
          <img className='man-on-phone-img' src={manOnPhoneImg} alt="image of a man on his phone" />
        </div>
  </div>
  )
}

export default Homepage