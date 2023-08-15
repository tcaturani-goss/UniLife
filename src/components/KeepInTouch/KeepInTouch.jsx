import React from 'react'
import './KeepInTouch.css'
import { BiLogoFacebookCircle, BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";

function KeepInTouch() {
  return (
    <div>
       <div className='main-container'>
         <div className='keep-in-touch-container'>
            <p className='title-text'>Keep in touch</p>
            <p className='details-text'>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input className='email-input' placeholder='Your email' type="text" />
         </div>
         <div className='lets-socialize-container'>
              <p className='title-text'>Let's Socialize</p>
            <div className='social-media-container'>
              <BiLogoFacebookCircle className='social-media-icon'/>
              <p className='social-media-text'>Facebook</p>
            </div>
            <div className='social-media-container'>
              <AiFillTwitterCircle className='social-media-icon'/>
              <p className='social-media-text'>Twitter</p>
            </div>
            <div className='social-media-container'>
              <BiLogoInstagramAlt className='social-media-icon'/>
              <p className='social-media-text'>Instagram</p>
            </div>
         </div>
       </div>
    </div>
  )
}

export default KeepInTouch