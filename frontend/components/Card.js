// 

import React from 'react';
import "./Card.css"
import { MdLocationOn } from "react-icons/md";
import { FaRupeeSign  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className='card88'>

        <div className='comp88'>
        <h1>{props.company}</h1>
          
        </div>
 
        <div className='role88'>
          <h2>{props.role}</h2>
          <p><MdLocationOn /> {props.place}</p>
        </div>

        <div className='mode88'>
          <button className='modebtn88'>Full time</button>
          <button className='modebtn88'>Remote</button>
        </div>

        <div className="salary88">
  <h3>₹{props.salary}</h3>
  <a 
    href="https://www.ncs.gov.in/Pages/Search.aspx?DA=6gqhwycyVHE%3D" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="details88">View Details</button>
  </a>
</div>

      
    </div>
  );
}

export default Card;
