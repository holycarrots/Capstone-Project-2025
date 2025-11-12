// import React from 'react';
// import {Link} from "react-router-dom"
// import MotivationInfo from './MotivationInfo'
// import MotoCard from './MotoCard';
// import "./Motivation.css"


// const Motivation = () => {
//   return (
//     <div className='motivation88'>
//       <h1 style={{fontSize:"3rem"}}>Success is hidden in your daily routine</h1>
//       <p style={{fontSize:"2.5rem"}}>Get Motivated and acheive your goals</p>
//         <div className='moto88'>

//         {
//         MotivationInfo.map((item,index)=>
        
//            (
//               <MotoCard 
//               key={index}
//               image={item.image}
//             />
//             ) 
//         )
//       }
//         </div>

//         <Link to="#playlist"><button className='motobtn88'> See More</button></Link>
//     </div>
//   );
// }

// export default Motivation;



import React from 'react';
import {Link} from "react-router-dom"
import MotivationInfo from './MotivationInfo'
import MotoCard from './MotoCard';
import "./Motivation.css"


const Motivation = () => {
  return (
    <div className='motivation88 wow animate__zoomIn animate__animated animate_slower'>
      <h1 style={{fontSize:"3.7rem",fontFamily:"Inter, sans-serif",fontWeight:"bold"}}>Success is hidden in your daily routine</h1>
      <p style={{fontSize:"2.5rem",fontFamily:"Inter, sans-serif",color:"grey"}}>Get Motivated and acheive your goals</p>
        <div className='moto88'>

        {
        MotivationInfo.map((item,index)=>
        
           (
              <MotoCard 
              key={index}
              image={item.image}
            />
            ) 
        )
      }
        </div>

        <Link to="#playlist"><button className='motobtn88'> See More</button></Link>
    </div>
  );
}

export default Motivation;

