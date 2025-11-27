import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import cont from "../assets/Cont.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs.sendForm(
      'service_2sqomnf',     // ✅ Your correct EmailJS Service ID
      'template_12rrkrp',    // ✅ Your correct EmailJS Template ID
      form.current,
      'Rk4E9EyOW2iqJqAu2'    // ✅ Your correct Public Key
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Your message has been sent!");
        form.current.reset();
      },
      (error) => {
        console.log("ERROR:", error);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div className="out65">
      <div className="size65 wow animate__slideInLeft animate__animated animate_slower">
        <div className="o65 left">
          <div
            className="heder65"
            style={{ display: "flex", flexDirection: "column", marginBottom: "2rem" }}
          >
            <h1 className="r05">
              Get in <span className="r65">Touch</span>
            </h1>
            <p style={{ fontSize: "1.8rem" }}>
              We are here for you! How can we help?
            </p>
          </div>

          <form className="form65" ref={form} onSubmit={sendEmail}>
            
            {/* Name */}
            <input
              className="po1165 input65"
              type="text"
              placeholder="Enter your full Name"
              name="from_name"     // ✅ Must match EmailJS template
              style={{ width: "100%" }}
              required
            />

            {/* Email */}
            <input
              className="po1165 input65"
              type="email"
              placeholder="Enter your email address"
              name="from_email"    // ✅ Must match EmailJS template
              style={{ width: "100%" }}
              required
            />

            {/* Message */}
            <textarea
              className="po1165 textarea65"
              placeholder="Go ahead, we are listening.."
              name="message"       // ✅ Must match EmailJS template
              style={{ width: "100%" }}
              required
            />

            {/* Submit */}
            <input
              type="submit"
              value="Send"
              style={{ width: "100%" }}
              className="sendip88"
            />

          </form>
        </div>
      </div>

      <div
        className="right65 wow animate__slideInRight animate__animated animate_slower"
        style={{ width: "100%", height: "100%", objectFit: "cover", paddingBottom: "10rem" }}
      >
        <img
          src={cont}
          style={{ height: "450px", width: "550px" }}
          alt="Contact"
        />
      </div>
    </div>
  );
};

export default Contact;
