import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer' >
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='img' src="/Quickbites Marketing.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis eveniet officia reprehenderit exercitationem cupiditate ad magni excepturi? Culpa similique eligendi dicta ut eaque quia, nemo illo laboriosam beatae molestiae.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+9234400611</li>
                    <li>quickbites@gmail.com</li>
                </ul>

            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © QuickBite.com- All Right Reserved</p>
    </div>
  )
}

export default Footer
