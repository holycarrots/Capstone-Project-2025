// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./Test.css"

// const Test = (props) => {
//   return (
//     <div className='test88'>

//       <div className='test_img88'>
//         <img src={props.image}/>
//       </div>

//       <h2>{props.platform}</h2>

//       <Link target="_blank" to={props.url}><button className='test-btn88'>View More</button></Link>

//     </div>
//   );
// }

// export default Test;




import React from 'react';
import { Link } from 'react-router-dom';
import "./Test.css"

const Test = (props) => {
  return (
    <div className='test88'>

      <div className='test_img88'>
        <img src={props.image}/>
      </div>

      <h2>{props.platform}</h2>

      <Link target="_blank" to={props.url}><button className='test-btn88'>View More</button></Link>

    </div>
  );
}

export default Test;
