import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img style={{width:'300px'}} src={assets.logo} alt="" />
                <p>Order now and savor the flavor! TomATO - Delicious food at your doorstep.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-5555-5447-45</li>
                    <li>tometotestioo@gmail.com</li>
                </ul>

            </div>

        </div>

        <hr />
        <p className='footer-copyright'> copyright 2024 @ tomato.com  All right resarved</p>
    </div>
  )
}

export default Footer