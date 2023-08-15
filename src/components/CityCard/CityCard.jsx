import {} from 'react'
import './CityCard.css'


function CityCard({ city }) {
  return (
    <div className='city-card'>
      <img className='city-img' src={city?.image_url} alt={city?.name} />
      <div className='city-overlay'>
        <a href={`/citydetailspage/${city?._id}`}>
          <p className='city-name'>{city?.name}</p>
        </a>
        <p className='property-count'>{city?.property_count} properties</p>
      </div>
    </div>
  );
}

export default CityCard