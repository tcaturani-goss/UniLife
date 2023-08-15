import {useState, useEffect} from 'react'
import axios from 'axios'
import './InputHome.css'

function InputHome() {
  
  const [selectedCity, setSelectedCity] = useState('');
  const [options, setOptions] = useState([])

  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/cities`)
    .then((res) => {
      console.log(res.data.response);
      const newOptions = res.data.response.map((city) => city.name);
      console.log(newOptions);
      setOptions(newOptions);
    })
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='city-banner-dropdown-container'>
          <div className='dropdown'>
           <label htmlFor="select-city"></label>
           <select className='home-dropdown-select' id='select-city'>
           <option value='' disabled selected>Search by city</option>
            {
              options.map(city =><option key={city}>{city}</option>)
            }
           </select>
           <a href={`/citydetailspage/${selectedCity}`} className='home-dropdown-button'>Find Homes</a>
          </div>
    </div>
  )
}

export default InputHome