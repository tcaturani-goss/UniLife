import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { BsCheck2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineBed, MdOutlineBathtub } from "react-icons/md";
import bookingModalIcon from '../../assets/booking-modal-icon.png';
import './HomeDetailsPage.css'
import axios from 'axios';
import Modal from 'react-modal';

function HomeDetailsPage() {
  const { propertyId } = useParams();
  const [property, setProperty] = useState({});
  const [isOpen, setIsOpen] = React.useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
      .then(res => {
        console.log(res.data);
        setProperty(res.data);
      })
      .catch(err => console.log(err));
  }, [propertyId]);

  
  return (
    <div className='home-details-main-container'>
        <div className='back-to-search-link'>
          <IoIosArrowBack />
          <Link to={`/citydetailspage/${property?.city_id?._id}`}>Back to Search</Link>
        </div>

        <div className='desktop-flex-row'>
        <div className='home-details-main-img-container'>
        {property.images && property.images.length >= 4 ? (
            <>
             <img className='home-details-main-img' src={property.images[0]} alt={property.name} />
              <div className='home-details-lower-img-container'>
                 <img className='home-lower-img' src={property.images[1]} alt={property.name} />
                 <img className='home-lower-img' src={property.images[2]} alt={property.name} />
                 <img className='home-lower-img' src={property.images[3]} alt={property.name} />
              </div>
            </>
          ) : (
            <p>Loading images...</p>
          )}
       </div>

       <div className='home-details-card-container'>
            <div className='home-details-property-address-container'>
              <p>{`${property?.address?.street}, ${property?.address?.city}, ${property?.address?.postcode}`}</p>
            </div>
            <div className='home-details-card-info-container'>
              <div className='home-details-card-info-line-top'>
                <div className='home-details-card-info-group'>
                  <p className='home-details-card-info-group-title'>Bedrooms</p>
                  <div className='home-details-card-info-icon-group'>
                    <MdOutlineBed className='home-details-icon'/>
                    <p>{property.bedroom_count}</p>
                  </div>
                </div>
                <div className='home-details-card-info-group'>
                  <p className='home-details-card-info-group-title'>Bathrooms</p>
                  <div className='home-details-card-info-icon-group'>
                    <MdOutlineBathtub className='home-details-icon'/>
                    <p>{property.bathroom_count}</p>
                  </div>
                </div>
                <div className='home-details-card-info-group'>
                  <p className='home-details-card-info-group-title-extended'>Property Type</p>
                  <div className='home-details-card-info-icon-group'>
                    <p>{property.property_type}</p>
                  </div>
                </div>
              </div>
              <div className='home-details-card-info-line-bottom'>
                <div className='home-details-card-info-group'>
                  <p className='home-details-card-info-group-title'>Price</p>
                  <div className='home-details-card-info-icon-group'>
                    <p>&pound;{property.deposit}</p>
                  </div>
                </div>
                <div className='home-details-card-info-group'>
                  <p className='home-details-card-info-group-title-extended'>Furnished type</p>
                  <div className='home-details-card-info-icon-group'>
                    <p>{property.furnished}</p>
                  </div>
                </div>
                <div className='home-details-card-info-group'>
                  <p className='home-details-card-info-group-title-extended'>Available from</p>
                  <div className='home-details-card-info-icon-group'>
                    <p>{property.availability}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='home-details-link-container'>
                <div className='home-details-shortlist-container'>
                  <AiOutlineHeart />
                  <a href="#" className='home-details-shortlist-link'>Shortlist</a>
                </div>
                <div className='home-details-book-viewing-container'>
                  <button className='home-details-booking-link' onClick={()=>setIsOpen(true)}>Book Viewing</button>
                </div>
                <Modal
                  isOpen={isOpen}
                  onRequestClose={()=>setIsOpen(false)}
                  style={customStyles}
                  contentLabel="Contact Us Modal"
                  >
                  <div className="modal-header-container">
                    <div className='modal-header'>
                      <h2 className='modal-title-text'>Book a Viewing</h2>
                      <img className='booking-modal-icon' src={bookingModalIcon} alt="booking modal icon" />
                    </div>
                    <p className='modal-header-details-text'>{`${property?.address?.street}, ${property?.address?.city}, ${property?.address?.postcode}`}</p>
                  </div>
                     <form className='modal-form-container'>
                      <div className='booking-modal-left-column'>
                       <label htmlFor="name">Name</label>
                       <input type="text" id="name" placeholder='Enter your name'/>
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" placeholder='Enter your email address'/>
                       <label htmlFor="phone">Phone Number</label>
                       <input type="tel" id="phone" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Enter your phone number'/>
                      </div>
                      <div className='booking-modal-right-container'>
                       <label htmlFor="message">Message</label>
                       <textarea id="message" rows="4" placeholder='Enter your message'></textarea>
                       <button type="submit" onClick={()=>setIsOpen(false)}>Submit</button>
                      </div>
                     </form>
                </Modal>
            </div>
       </div>

        </div>
       
       <div className='home-details-description-desktop-grid-container'>
       <div className='home-details-description-container'>
            <p className='home-details-description-title'>Description</p>
            <p className='home-details-description-text'>Remodelled to perfection! This beautiful home is located 
              close to shopping and dining. Here are just a few of its 
              wonderful features: cozy fireplace, new kitchen cabinets, 
              stainless steel sink, modern quartz counter tops, wood flooring,
              remodelled bathrooms, freshly painted, central a/c, attached 
              two-car garage, large back yard, and so much more!</p>
       </div>

       <div className='home-details-key-features-container'>
            <p className='home-details-description-title'>Key Features</p>
            <div className='home-details-key-features-group'>
              <BsCheck2 className='home-details-check-mark-icon'/>
              <p className='home-details-description-text'>Great Size Period Property</p>
            </div>
            <div className='home-details-key-features-group'>
              <BsCheck2 className='home-details-check-mark-icon'/>
              <p className='home-details-description-text'>Four / Five Bedrooms</p>
            </div>
            <div className='home-details-key-features-group'>
              <BsCheck2 className='home-details-check-mark-icon'/>
              <p className='home-details-description-text'>Two Reception Rooms</p>
            </div>
            <div className='home-details-key-features-group'>
              <BsCheck2 className='home-details-check-mark-icon'/>
              <p className='home-details-description-text'>OpenPlan Dining Kitchen</p>
            </div>
            <div className='home-details-key-features-group'>
              <BsCheck2 className='home-details-check-mark-icon'/>
              <p className='home-details-description-text'>Two Bath/Shower Rooms & Two WC's</p>
            </div>
       </div> 
       <div className='home-details-bedroom-container'>
           <p className='home-details-description-title'>Bedroom Prices</p>
           <div className='home-details-bedroom-price-container'>
           {property.bedroom_prices ? (
             <>
             <div className='home-details-bedroom-price-group'>
               <p>Bedroom 1</p>
               <p>&pound;{`${property.bedroom_prices.bedroom_one || "N/A"} per week`}</p>
             </div>
             <div className='home-details-bedroom-price-group'>
               <p>Bedroom 2</p>
               <p>&pound;{`${property.bedroom_prices.bedroom_two || "N/A"} per week`}</p>
             </div>
             <div className='home-details-bedroom-price-group'>
               <p>Bedroom 3</p>
               <p>&pound;{`${property.bedroom_prices.bedroom_three || "N/A"} per week`}</p>
             </div>
             <div className='home-details-bedroom-price-group-last'>
               <p>Bedroom 4</p>
               <p>&pound;{`${property.bedroom_prices.bedroom_four || "N/A"} per week`}</p>
             </div>
           </>
               ) : (
               <p>No bedroom prices available.</p>
               )}
          </div>
     </div>

       </div>





    </div>
  );
}

export default HomeDetailsPage;
