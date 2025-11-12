import React from 'react'
import './Failure.css'
export default function Failure() {
  return (
    <>
      <div className="container_in">
  <div className="ui middle aligned center aligned grid">
    <div className="ui eight wide column">
   
      <form classNameName="ui large form">
                
          <div className="ui icon negative message">
            <i className="warning icon"></i>
            <div className="content">
              <div className="header">
                Oops! Something went wrong.
              </div>
              <p>While trying to reserve money from your account</p>
            </div>
            
         </div>
      
          <span className="ui large teal submit fluid button">Try again</span>
      
      </form>
    </div>
  </div>
</div>
    </>
  )
}

