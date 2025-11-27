import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import "animate.css";

const Footer = () => {
  return (
    <div className='footer88'>
      <div className='foot88'>
        <div className='section88 wow animate__slideInLeft animate__animated animate_slower'>
          <h3 style={{color:"white"}}>Udyog Saarth</h3>
          <p><a href="mailto:sih.pro.2023@gmail.com">sih.pro.2023@gmail.com</a></p>
          <p><a href="tel:+916290791304">+91 6290791304</a></p>
          <p><a href="https://wa.me/6290791304">Whatsapp us</a></p>
        </div>

        <div className='section88 wow animate__slideInLeft animate__animated animate_slower'>
          <h4>Take a tour</h4>
          <a href='/'>Features</a>
          <Link to="/product">Pricing</Link> {/* Link now goes to Product page */}
          <a href='/'>Product</a>
          <a href='/contact'>Support</a>
        </div>

        <div className='section88 wow animate__slideInRight animate__animated animate_slower'>
          <h4>Our company</h4>
          <a href='/about'>About us</a>
          <a href='/courses'>Courses</a>
          <a href='/courses'>Assessment</a>
          <a href='/contact'>Contact us</a>
        </div>

        <div className='section88 wow animate__slideInRight animate__animated animate_slower'>
          <h4>Resources</h4>
          <a href='/Privacy'>Privacy</a>
          <a href='/Terms'>Terms of use</a>
          <a href='/contact'>Help center</a>
          <a href='/jobs'>Jobs</a>
        </div>
      </div>
      <h4>Made with ❤️ -Team Hexacoders</h4>
    </div>
  );
}

export default Footer;
