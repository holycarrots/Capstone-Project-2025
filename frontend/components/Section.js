import React from 'react';
import Course from './Course';
import { data0,data1,data2,data3 } from './datareturn';

const Section = (props) => {

let category = props.category;
let data;

if(category === "All")
    data=data0;
if(category === "IT")
    data=data1;
if(category === "Non IT")
    data=data2;
if(category === "Govt.")
    data=data3;


  return (

    <div className='full-courses88'>

      <div className='courses88'>

        {
        data.slice(0,9).map((item,index)=>
        
           (
              <Course 
              key={index}
              image={item.imageUrl}
              platform={item.heading}
              url={item.courseLink}
            />
            ) 
        )
      }

      </div>
      <button className='courses-btn88' style={{border:"1px solid orange"}}>See More</button>

    </div>
  );
}

export default Section;
