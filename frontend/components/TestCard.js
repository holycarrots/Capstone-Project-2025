import React from 'react';
import "./TestCard.css";
import {Link} from "react-router-dom"

const TestCard = (props) => {
  return (
    <div className='testcard88'>
      <div className='test-img88'>
            <img src={props.image} />
      </div>
      <Link target="_blank" className='link88' to={props.url}>{props.heading}</Link>
    </div>
  );
}

export default TestCard;

