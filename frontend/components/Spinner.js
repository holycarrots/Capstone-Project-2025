import React from 'react'
// import loader from '../assets/loader.gif';
import {ThreeDots} from 'react-loader-spinner';
export default function Spinner() {
  return (
    <div style={{margin:"auto"}}>
        <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#dc6601" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
    </div>
  )
}
