import React from 'react';
import "./Courses.css"
import Course from './Course';
import Info from "./Courseinfo";
import 'animate.css';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div className='full-courses88 wow animate__slideInUp animate__animated animate_slower'>
    
      <h1 style={{fontSize:"3.7rem",fontFamily:"Inter, sans-serif",fontWeight:"bold"}}>Unlock your career, explore exciting courses awaited just for you!</h1>
      <p style={{fontSize:"2.5rem",fontFamily:"Inter, sans-serif",color:"grey"}}>Training and courses offered by our various institutions</p>

      <div className='courses88'>

        {
        Info.map((item,index)=>
        
           (
              <Course 
              key={index}
              image={item.image}
              platform={item.platform}
              url={item.url}
            />
            ) 
        )
      }

      </div>
      <Link to="/courses"><button className='courses-btn88'> See More</button></Link>

    </div>
  );
}

export default Courses;

