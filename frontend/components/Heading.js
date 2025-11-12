// import React from 'react';
// import './Heading.css';
// import image from "../assets/asset1.png";
// import { Link } from 'react-router-dom';

// const Heading = () => {
//   const token = sessionStorage.getItem('token');
//   return (
//     <div className='heading88'>

//       <div className='context88'>
//         <div className='looking88'>
//           <p>Looking for a job?</p>
//         </div>

//         <div className='content88'>
//           <h1 style={{fontSize:"4rem",marginBottom:"0px"}}>Find your <span>dream job</span> and secure your <span>future</span> </h1>
//           <h3>Let's start joining us and get your job</h3>
//           <h4>10,000 over jobs </h4>
//         </div>

//         {
//           !token &&
//           <div className='btns88'>
//             <Link to="/login"><button className='bt88 btn-primary btn-lg login88'>Login</button></Link>
//             <Link to="/signup"><button className='bt88 btn-primary btn-lg register88'>Register</button></Link>
//           </div>
//         }
//       </div>

//       <div className='heading-img88'>
//         <img src="https://res.cloudinary.com/drtqzmu2n/image/upload/v1696315520/UI/Consulting-cuate_tichmc.png" />
//       </div>

//     </div>
//   );
// }

// export default Heading;


import React from 'react';
import './Heading.css';
// import image from "../assets/asset1.png";
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import 'animate.css';

const Heading = () => {
  const token = sessionStorage.getItem('token');
  return (
    <div className='heading88'>

      <div className='context88'>
        <div className='looking88 animate__animated animate__swing'>
          <p>Looking for a job?</p>
        </div>

        <div className='content88'>
          <h1 style={{ fontSize: "3.7rem", marginBottom: "0px" ,fontFamily:"Inter, sans-serif" }}>Find your <span>dream job</span> and
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially


                ' secure your future.',
                500,
                ' fullfill your demands.',
                500,
                ' enjoy your life.',
                500,
                '',
                500,

              ]}
              speed={50}

              repeat={Infinity}
            />
          </h1>
          <h4 style={{fontSize:"2.5rem"}}>Let's start joining us and get your job</h4>
          <h4 style={{fontSize:"2.3rem", fontWeight:"bold"}}>10,000 over jobs </h4>
        </div>

        {
          !token &&
          <div className='btns88 animate__animated animate__bounceInLeft animate__delay-1s animate__slow'>
            <Link to="/login"><button className='bt88 btn-primary btn-lg login88'>Login</button></Link>
            <Link to="/signup"><button className='bt88 btn-primary btn-lg register88'>Register</button></Link>
          </div>
        }
      </div>

      <div className='heading-img88'>
        <img src="https://res.cloudinary.com/drtqzmu2n/image/upload/v1696315520/UI/Consulting-cuate_tichmc.png" />
      </div>

    </div>
  );
}

export default Heading;
