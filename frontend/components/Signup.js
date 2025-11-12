import React, { useState } from 'react';
import './Signup.css';
import login from '../assets/login.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import 'sweetalert2/src/sweetalert2.scss';


export default function Signup() {
  const [val, setVal] = useState({ firstName: "", lastName: "", email: "", mobileNumber: "", password: "", udid: "" });
  const navigate = useNavigate()

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setVal((prev) => ({
      ...prev, [name]: type === "checked" ? checked : value
    }))
  }
  async function saveHandler(e) {
    console.log(val);
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      password,
      udid,
    } = val;

    if (firstName === "") {
      toast.error("Please enter Your First Name");
    } else if (lastName === "") {
      toast.error("Please enter Your Last Name");
    } else if (email === "") {
      toast.error("Please enter Your email");
    } else if (!email.includes("@")) {
      toast.error("Enter valid email");
    } else if (!email.includes(".")) {
      toast.error("Enter valid email");
    } else if (password === "") {
      toast.error("Enter your password");
    } else if (password.length < 8) {
      toast.error("Password must be 8 char");
    } else if (mobileNumber === "") {
      toast.error("Enter your Mobile Number");
    } else if (mobileNumber.length < 10) {
      toast.error("Mobile Number must be 10 char");
    } else if (udid === "") {
      toast.error("Enter your UDID");
    } else {

      try {
        console.log('Sending signup request to:', 'http://localhost:5000/api/v1/auth/signup');
        const response = await fetch('http://localhost:5000/api/v1/auth/signup', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            mobileNumber,
            password,
            udid,
          }),
        });

        const data = await response.json();
        console.log('Server response:', data);

        if (response.ok) {
          toast.success(data.message || "User registered successfully");
          setVal({
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            password: "",
            udid: "",
          });
          navigate('/login');
        } else {
          // Show the specific error message from the server
          const errorMessage = data.message || "Registration failed. Please try again.";
          toast.error(errorMessage);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Registration failed. Please check your connection and try again.");
      }
    }
  }

  async function getCodeHandler(e) 
  {
    e.preventDefault();
    const { email } = val;
    try {
      const data = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/sendotp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const res = await data.json();

      if (data.status === 200) {
        // OTP sent successfully
        // toast.success("Verification OTP sent successfully");
        // Verification code sent to email, check spam folder if missing.
        Swal.fire({
          title: '<h4><b>Verification Code</b></h4>',
          html:
            '<h5>Verification code sent to email,  check<b> spam</b> folder if missing. </h5> ',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      } else if (data.status === 401) {
        // User is already registered
        toast.error("User is already registered. Please sign in to continue.");
      } else {
        // Handle other status codes or error cases
        toast.error("Failed to send OTP. Please fill your email. First!.");
      }
    } 
    catch (error) {
      console.error("Error:", error);
      toast.error("Registration failed. Please try again.");
    }
  }
  async function loginHandler(e) {
    navigate('/login')
  }


  return (
    <div className='backsignup21'>
      <div className='signlogin21'>
        <div className='signmaindivimage21'>
          <img src={login} alt="loginimage" />
        </div>
        <div className='signloginform21'>

          <div className='signdetail21'>
            <h3>Welcome,Create your account</h3>
            <div className="signcontent21">
              <form>
                <div className="signuser-details21">
                  <div className="signinput-box21">
                    <label className="signdetails21" >First Name</label>
                    <input type="text" placeholder="Enter your name" required name="firstName" value={val.firstName} onChange={changeHandler} />
                  </div>
                  <div className="signinput-box21">
                    <label className="signdetails21" >Last Name</label>
                    <input type="text" placeholder="Enter your username" required name="lastName" value={val.lastName} onChange={changeHandler} />
                  </div>
                </div>
                <div className='signlongdiv21'>
                  <div className="signinput-box21">
                    <label className="signdetails21" >Email</label>
                    <input type="email" placeholder="Enter your email address" name="email" value={val.email} onChange={changeHandler} style={{ width: "350px", height: "40px", marginBottom: '10px', fontSize: '16px' }} />

                  </div>
                  <div className="signinput-box21">
                    <label className="signdetails21" >Password</label>
                    <input type="password" placeholder="***************" name="password" value={val.password} onChange={changeHandler} style={{ width: "350px", height: "40px", marginBottom: '10px', fontSize: '16px' }} />
                  </div>
                  <div className="signinput-box21">
                    <label className="signdetails21" >Mobile</label>
                    <input type="number" placeholder="Enter your mobile number" name="mobileNumber" value={val.mobileNumber} onChange={changeHandler} style={{ width: "350px", height: "40px", marginBottom: '10px', fontSize: '16px' }} />
                  </div>
                  <div className="signinput-box21">
                    <label className="signdetails21" >UDID</label>
                    <input type="text" placeholder="Enter your UDID number" name="udid" value={val.udid} onChange={changeHandler} style={{ width: "350px", height: "40px", marginBottom: '10px', fontSize: '16px' }} />
                  </div>
                </div>
                <button type='submit' className='signloginbutton21' onClick={saveHandler}>Create Account</button>
                <p className='signloginregister21'>Already Registered?<label style={{ color: "#F58840", cursor: "pointer" }} onClick={loginHandler}>Login</label> here</p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
