import {useState, useEffect} from 'react'
import Banner from '../../components/Banner/Banner'
import './SeeAllCitiesPage.css'
import axios from 'axios'

function SeeAllCitiesPage() {
  // Create state to hold the cities
  const [allCities, setAllCities] = useState([])

  // https://unilife-server.herokuapp.com/cities
  
  useEffect(() => {
      axios.get(`https://unilife-server.herokuapp.com/cities`)
      .then(res => {
          console.log(res.data.response)
          const newAllCities = res.data.response;
          console.log(newAllCities)
          setAllCities(newAllCities)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
       <Banner title={"Student Accomodation"} body={`UniLife have student accommodation available across the UK.
Whatever you’re after, we can help you find the right student accommodation for you.`}/>
       <p className='search-by-text'>Search by City</p>
       <div className='all-city-link-container'>
        {allCities.map(city => (
          <a key={city._id} href={`/citydetailspage/${city?._id}`} className='all-city-name'>
            {city.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SeeAllCitiesPage