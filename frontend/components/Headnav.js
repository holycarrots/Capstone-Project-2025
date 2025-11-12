import React from 'react'
import team from '../assets/team.png';
import './Headnav.css';
import Jobssec from './Jobssec';
export default function Headnav() {
    return (
        <div>
            <div className='headingnav21'>
                <div className='heading21'>
                    <h1 style={{fontSize:"40px" }}>Get The <span style={{ color: "#F58840"}}>Right</span> Job</h1>
                    <h1 style={{ lineHeight: "4px",fontSize:"40px" }}>You Deserve</h1>
                    <h3 className='headingsmall21'>#1 Platform for all jobs  &#128293;</h3>
                </div>
                <div>
                    <img src={team} alt="image" className='imagedes21' />
                </div>
            </div>
            <Jobssec/>
        </div>
    )
}
