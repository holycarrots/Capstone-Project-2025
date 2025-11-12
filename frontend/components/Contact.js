import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css';
import cont from "../assets/Cont.png"

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs
      .sendForm(
        'service_twxcq9u',
        'template_rggu7nm',
        form.current,
        'Ks2Hbe3gD7OeFVfZL')
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
          alert("message has been sent")
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        });
  };

  return (
    <div className="out65">
      <div className=" size65 wow animate__slideInLeft animate__animated animate_slower">
        <div className="o65 left">
        
          <div className="heder65" style={{display:"flex", flexDirection:"column",marginBottom:"2rem"}}>
            <h1 className="r05">Get in <span className="r65">Touch</span></h1>
            <p style={{fontSize:"1.8rem"}}>We are here for you ! How can we help?</p>
          </div>


          <form className="form65" ref={form} onSubmit={sendEmail} >

            <input className='po1165 input65' type="text" placeholder="Enter your full Name" name="to_name" style={{width:"100%"}} />

            <input className='po1165 input65' type="email" placeholder="Enter your email address" name="from_name" style={{width:"100%"}} />

            <textarea className='po1165 textarea65' placeholder="Go ahead, we are listening.." style={{width:"100%"}} />
            <input type="submit" value="Send" style={{width:"100%"}} className='sendip88'/>
          </form>
        </div>
      </div>

      <div className="right65 wow animate__slideInRight animate__animated animate_slower" style={{width:"100%",height:"100%",objectFit:"cover",paddingBottom:"10rem"}}>
        <img src={cont} style={{height:"450px",width:"550px"}} />
      </div>

    </div>

  );
}

export default Contact;
