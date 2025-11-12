import React, { useState } from "react";
import people from "./TestimonialInfo";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./Testimonial.css";
import 'animate.css';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const minIndex=0;
  const maxIndex=people.length-1;

  
  const getRandomPerson=()=>{
    const getRandomIntInclusive=(min, max) =>{
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    let randomIndex=getRandomIntInclusive(minIndex, maxIndex);
    if (randomIndex===index){
      randomIndex=index+1
    }
    setIndex(checkNumber(randomIndex));

  }
  

  return (
    <article className="review88 wow animate__zoomIn animate__animated animate_slower">
      <div className="img-container88">
        <img src={image} alt={name} className="person-img88" />
        <span className="quote-icon88">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author88" style={{color:"black", fontWeight:"600",fontFamily:"Merriweather, serif",fontSize:"3rem"}}>{name}</h4>
      <p className="job88" style={{color:"#F58840", fontWeight:"700",fontSize:"1.5rem"}}>{job}</p>
      <p className="info88"style={{color:"grey"}}>{text}</p>
      <div className="button-container88">
        <button className="prev-btn88" onClick={prevPerson} style={{color:"black"}}>
          <FaChevronLeft size={20} />
        </button>
        <button className="next-btn88" style={{color:"black"}} onClick={nextPerson}>
          <FaChevronRight size={20} />
        </button>
      </div>
      <button className="random-btn88" onClick={getRandomPerson} style={{backgroundColor:"#F58840",color:"white",border:"1px solid #F58840"}}>Get Random Review</button>
    </article>
  );
};

export default Review;
