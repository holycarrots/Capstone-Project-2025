import React from 'react'
import './Carde.css'
import { AiFillLinkedin, AiOutlineMail, AiFillFacebook, AiOutlineGithub } from 'react-icons/ai';


const App = (props) => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "24%", flexDirection: "column", gap: "0.5rem", borderRadius: "1.75rem", boxShadow: "0px 4px 17px 0px rgba(0, 0, 0, 0.25)", padding: "0.7rem" }}>

    <div className='persoimg88'>
      <img variant="top" className="u111" src={props.url} />
    </div>


    <h2 style={{ fontFamily: "'Merriweather, serif", marginBlock: "0px", fontWeight: "600", color: "#F58840" }}> {props.name} </h2>
    <h4 style={{ marginTop: "0px", }}>{props.role}</h4>

    <div className="linkbot111">
      <a target="_blank" href={props.li} className='link111'><AiFillLinkedin /></a>
      <a target="_blank" href={props.github} className='link111'> <AiOutlineGithub /></a>
      <a href={props.email} className='link111'><AiOutlineMail /></a>
    </div>
  </div>
)

export default App
