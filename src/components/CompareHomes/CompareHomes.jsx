import {} from 'react'
import searchIcon from '../../assets/search-icon.png'
import compareIcon from '../../assets/compare-icon.png'
import billIcon from '../../assets/bill-icon.png'
import { Link } from 'react-router-dom'
import './CompareHomes.css'

function CompareHomes() {
  return (
    <div>
        {/* <Link><a className='all-cities-btn' href="/">See All Cities</a></ Link> */}
        <div className='compare-all-homes-main-container'>
            <p className='compare-title-text'>Compare all inclusive student homes.</p>
            <div className='desktop-flex-row'>
              <div className='compare-details-container'>
                <img className='icons' src={searchIcon} alt="search-icon" />
                <p className='title-text'>Search</p>
                <p className='compare-details-text'>Find your dream home in the perfect area near your university.</p>
              </div>
              <div className='compare-details-container'>
                <img className='icons' src={compareIcon} alt="search-icon" />
                <p className='title-text'>Compare</p>
                <p className='compare-details-text'>Compare student accommodation to find the right home for you.</p>
              </div>
              <div className='compare-details-container'>
                <img className='icons' src={billIcon} alt="search-icon" />
                <p className='title-text'>Bills Included</p>
                <p className='compare-details-text'>Bills are included in all rent prices. No hidden fees.</p>
              </div>
            </div>
        </div>
        {/* <Link><a className='search-compare-btn' href="/">Search & Compare</a></Link> */}
    </div>
  )
}

export default CompareHomes