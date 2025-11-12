// import React from 'react';
// import './Heading1.css';
// import image from "../assets/asset15.png"


// const Heading1 = () => {
//   return (
//     <div className='heading188'>
//         <div className='tag88'>
//             <h1 style={{fontSize:"4rem"}}>Find the best courses and upgrade your skills</h1>
//             <p style={{fontSize:"2.7rem"}} >
//      Elevate Your Skills and       
//      Career with Our   
//      Exceptional Training and 
//      Courses, Setting You on a   
//      Path to Success and    
//      Growth.</p>

//         </div>

//         <div className='tagimg88'>
//             <img src={image} />
//         </div>

//     </div>
//   );
// }

// export default Heading1;


import React from 'react';
import './Heading1.css';
import image from "../assets/asset15.png"
import { TypeAnimation } from 'react-type-animation';

const Heading1 = () => {
  return (
    <div className='heading188' style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"2rem",fontFamily:"Inter, sans-serif",color:"grey",fontSize:"3.3rem",minHeight:"300px"}}>
      <div className='tag88 wow animate__slideInUp animate__animated animate_slower' style={{width:"40%"}}>
        <h1 style={{ fontSize: "3.9rem",height:"90x",fontFamily:"Inter, sans-serif",fontWeight:"bold"}}>Find the best courses and
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              ' upgrade',
              500,
              ' upgrade your',
              500,
              ' upgrade your skills',
              500,
              ' upgrade your',
              500,
              ' upgrade',
              500,
              '',
              500,

            ]}
            speed={50}

            repeat={Infinity}
          />
        </h1>
        <p style={{ fontSize: "2.5rem" }} >
          Elevate Your Skills and
          Career with Our
          Exceptional Training and
          Courses, Setting You on a
          Path to Success and
          Growth.</p>

      </div>

      <div className='tagimg88 wow animate__slideInDown animate__animated animate_slower' style={{width:"50%"}}>
        <img src={image} width={20} height={20} />
      </div>

    </div>
  );
}

export default Heading1;

