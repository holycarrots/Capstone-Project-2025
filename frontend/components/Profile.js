import React from 'react'
import { Link,NavLink} from "react-router-dom";
import "./Profile.css"
import { AiFillSetting,AiOutlineUser,AiOutlineLogout } from "react-icons/ai";
import {FaHandsHelping } from "react-icons/fa";
import {BsFillBookmarkStarFill } from "react-icons/bs";
import Change from './Change';

export default function Profile() {
  return (
    <div className='editprofile88' style={{padding:"0"}}>

      <div className='side-bar88'>
        <div className='side-links88' style={{backgroundColor:"#F58840", }}>
          <Link to="/profile" style={{textDecoration:"none"}}> <div className='side-link88'><AiOutlineUser size={20} />  User info</div> </Link>
          <Link to="#" style={{textDecoration:"none"}}> <div className='side-link88'><AiFillSetting size={20} />  Settings</div> </Link>
          <Link to="/jobs" style={{textDecoration:"none"}}> <div className='side-link88'><BsFillBookmarkStarFill size={20} />  Bookmarks</div> </Link>
          <Link to="/contact" style={{textDecoration:"none"}}> <div className='side-link88'><FaHandsHelping size={20}/>  Help</div></Link>
          <Link to="/" style={{textDecoration:"none"}}> <div className='side-link88'><AiOutlineLogout size={20} />  Sign Out</div> </Link>
        </div>
      </div>


    <div className='rolling88'>
    <Change />
    </div>
      


      {/* components to render on condition  */}
      
    </div>
  )
}
