import React from 'react';
import "./Story.css";
import Testimonial from "./Testimonial";

const Story = () => {
  return (
    <div className='story88'>
        <div >
          <h1 className='story-head88' style={{fontSize:"3.7rem",marginTop:"7rem",marginBottom:"3rem",fontFamily:"Inter,sans-serif",fontWeight:"bold",color:"white"}}>What they say about us?</h1>
        </div>

        <Testimonial />

    </div>
  );
}

export default Story;
