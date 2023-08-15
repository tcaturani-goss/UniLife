import {useEffect, useState, React} from 'react'
import coverImage from '../../assets/cover-img.png';
import InputHome from './../InputHome/InputHome';
import './Banner.css'
import axios from 'axios';

function Banner({title, body}) {

  const [options, setOptions] = useState([])

  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/cities`)
    .then((res) => {
      const newOptions = res.data.response.map((city) => city.name);
      setOptions(newOptions);
    })
    .catch(err => console.log(err))
  }, [])

  return (
   <div>
     <div className='city-banner-container'>
         <img className='city-banner-img' src={coverImage} alt="Cover Image of City Skyline" />
         <div className='city-banner-overlay'></div>
         <p className='city-banner-title-text'>{title}</p>
         <p className='city-banner-detail-text'>{body}</p>
     </div>
   </div>
  )
}

export default Banner