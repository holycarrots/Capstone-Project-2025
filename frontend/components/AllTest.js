import React from 'react';
import Test from "./Test";
import data from './TestInfo';
import "./AllTest.css"

const AllTest = () => {
  return (
    <div className='full-test88 wow animate__slideInUp animate__animated animate_slower'>
      <h1 style={{fontSize:"3.7rem",fontFamily:"Inter, sans-serif",marginBottom:"1rem",fontWeight:"bold"}}>Prepare yourself, crack any job interviews and get hired!</h1>
      <p style={{fontSize:"2.5rem",fontFamily:"Inter, sans-serif",color:"grey"}}>Give our best self-assesment tests to check your progress</p>

      <div className='tests88'>

        {
        data.map((item,index)=>
        
           (
              <Test 
              key={index}
              image={item.image}
              platform={item.heading}
              url={item.url}
            />
            ) 
        )
      }
    
      </div>
      <button className='tests-btn88'>See More</button>

    </div>
  );
}

export default AllTest;

