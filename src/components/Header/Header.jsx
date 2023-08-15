import React, {} from 'react'
import unilifeLogo from '../../assets/unilife-logo.png';
import contactUsModalIcon from '../../assets/contact-modal-icon.png';
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import {Link} from 'react-router-dom'
import Modal from 'react-modal';
import './header.css'

function Header() {

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
  

  return (
    <div>
      <div className='header-container'>
          <Link className='logo' to="/"><img className='unilife-logo' src={unilifeLogo} alt="UniLife logo image" /></Link>
        <div className='header-nav'>
          <div className='header-link-container'>
           <AiOutlineHeart />
           <Link><a className='header-link' href="/">Shortlist</a></Link>
          </div>
          <div className='header-link-container'>
           <AiOutlineMail />
           <button className='header-link' onClick={()=>setIsOpen(true)}>Contact Us</button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Contact Us Modal"
        >
        <div className="modal-header-container">
          <div className='modal-header'>
            <h2 className='modal-title-text'>Contact Us</h2>
            <img className='contact-us-modal-icon' src={contactUsModalIcon} alt="contact us modal icon" />
          </div>
          <p className='modal-header-details-text'>Feel free to contact us if you have any questions.
             Looking forward to hear from you.</p>
        </div>
        <form className='modal-form-container'>
          <div className='contact-modal-left-column'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='Enter your name'/>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Enter your phone number'/>
            <label htmlFor="email">Are you a...</label>
            <input type="email" id="email" placeholder='Student'/>
          </div>
          <div className='contact-modal-right-column'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter your email address'/>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder='Enter your message'></textarea>
            <button type="submit" onClick={()=>setIsOpen(false)}>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Header