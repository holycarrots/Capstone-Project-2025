// import React, { useState } from 'react';
// import "./Trainings.css";
// import { filterData } from './FilterInfo';
// import Section from './Section';
// import AllTest from './AllTest';


// const Trainings = () => {

//   const [category,setCategory]=useState(filterData[0].title);

//   function filterHandler(title)
//   {
//     setCategory(title);
    
//   }


//   return (

//     <div className='trainings88' style={{marginTop:"3rem"}}>

//       <h1 style={{fontSize:"3.2rem"}}>Empower your success through premier training and courses.</h1>   
    
//       <div className='filtercourse88'>
//         <div className='all-fliterbtns88'>
        
//           {
//             filterData.map((item)=>
//             {
//               return (<button className='filter_btn88' key={item.id} style={category === item.title ? {backgroundColor:"#F58840",color:"white"}: {backgroundColor:"white",color:"#F58840",border:"1px solid #F58840"}} onClick={()=> filterHandler(item.title)}>{item.title}</button>)
//             })
//           }

//         </div>

//         <div className='searchFilter88'>
//           <input placeholder='Search'></input>
//           <button  className='serbtn88'>Search</button>
//         </div> 
//       </div>

//       <Section category={category} />

//       <AllTest />

      

//     </div>
//   );
// }

// export default Trainings;



import React, { useState } from 'react';
import "./Trainings.css";
import { filterData } from './FilterInfo';
import Section from './Section';
import AllTest from './AllTest';


const Trainings = () => {

  const [category,setCategory]=useState(filterData[0].title);

  function filterHandler(title)
  {
    setCategory(title);
    
  }


  return (

    <div className='trainings88 wow animate__slideInUp animate__animated animate_slower' style={{marginTop:"3rem"}}>

      <h1 style={{fontSize:"3.7rem",fontFamily:"Inter, sans-serif",fontWeight:"bold",marginBottom:"2rem"}}>Empower your success through premier training and courses.</h1>   
    
      <div className='filtercourse88'>
        <div className='all-fliterbtns88'>
        
          {
            filterData.map((item)=>
            {
              return (<button className='filter_btn88' key={item.id} style={category === item.title ? {backgroundColor:"#F58840",color:"white"}: {backgroundColor:"white",color:"#F58840",border:"1px solid #F58840"}} onClick={()=> filterHandler(item.title)}>{item.title}</button>)
            })
          }

        </div>

        <div className='searchFilter88'>
          <input placeholder='Search'></input>
          <button  className='serbtn88'>Search</button>
        </div> 
      </div>

      <Section category={category} />

      <AllTest />

      

    </div>
  );
}

export default Trainings;
