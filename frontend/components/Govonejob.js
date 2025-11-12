import React from 'react'
import './Govonejob.css';
import {Link} from 'react-router-dom';
export default function Onejob(props) {
    return (
        <>
            <div className='gonejobabout21'>
                <div className='goneaboutthejob21'>
                    <h1 style={{whiteSpace:"nowrap",textOverflow:"ellipsis",fontFamily:" 'Merriweather', 'serif' "}} className='ghehe21'>About The Job</h1>
                    <Link to = {`${props.jlink}`} target="_blank">
                    <button style={{marginLeft:"570px",marginTop:"15px"}} className='goneviewbutton21'>Apply</button>
                    </Link>
                </div>
                <div className='goneaboutdesc21'>
                    <p>{props.desc.split(" ").slice(0, 110).join(" ") + "..."}</p>
                    <h3>Skills Required:</h3>
                    <p>Good problem solver, Self Starter, Detail oriented</p>
                    <h3>Job Publisher:</h3>
                    <p>{props.publish}</p>
                    <h3>Employment Type:</h3>
                    <p>{props.type}</p>
                </div>
            </div>
        </>

    )
}
