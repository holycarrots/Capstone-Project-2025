import React from 'react'
import { Link } from "react-router-dom";
import './Success.css'
export default function Success() {

  return (
    <>
      <div style={{width:"40%",margin:"5rem auto",padding:"5rem 2rem",border:"2px solid orange",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/480px-Eo_circle_green_white_checkmark.svg.png" alt="success" style={{width:"120px",height:"120px"}}/>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem",justifyContent:"center",alignItems:"center" }}>
          <h1>Payment Done!</h1>
          <h4>Thank You for Completing your Secured Online Payment</h4>
          <h4 style={{ fontWeight: "bolder" }}>Have a Great Day!</h4>
        </div>
        <Link to="/">
        <button className='button-9'>Go Back</button>
        </Link>
      </div>

    </>
  )
}



// success.css and success.js created
