import React, { useState } from 'react';
import './Loginuser.css';
import logo from '../assets/logo.png';
import login from '../assets/login.png';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Loginuser() {
  const [val, setVal] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Handle input field changes
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setVal((prev) => ({
      ...prev,
      [name]: type === "checked" ? checked : value
    }));
  }

  // Handle login request
  async function saveHandler(e) {
    e.preventDefault();
    const { email, password } = val;

    try {
      console.log('Attempting login with:', { email, password: '******' });

      const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // ✅ fixed variable name
      });

      const data = await response.json(); // ✅ properly parse response

      if (response.status === 200 && data.success) {
        toast.success("User Login Success");

        const token = data.token;
        sessionStorage.setItem('token', token);

        setTimeout(() => {
          navigate('/');
          navigate(0);
          window.scrollTo(0, 0);
        }, 1000);

      } else if (response.status === 400) {
        toast.error("Please fill in all the required fields");
      } else if (response.status === 401) {
        toast.info("User is not registered with us. Please sign up to continue.");
      } else if (response.status === 402) {
        toast.error("Invalid credentials. Please check your email or password.");
      } else {
        toast.error("Login failed. Server returned an unexpected status code.");
      }

    } catch (error) {
      console.error("Error:", error);
      toast.error("Login failed. Please try again.");
    }
  }

  function forgotHandler() {
    toast.info("Forgot password feature coming soon!");
  }

  return (
    <div className='backlogin21'>
      <div className='login21'>
        <div className='maindivimage21'>
          <img src={login} alt="loginimage" />
        </div>

        <div className='loginform21'>
          <img src={logo} alt="logo" className='logo21' />
          <div className='detail21'>
            <h3>Hello, Welcome back!</h3>

            <div className="content21">
              <form onSubmit={saveHandler}>
                <div className='longdiv21'>
                  <div className="input-box21">
                    <label className="details21">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      name="email"
                      value={val.email}
                      onChange={changeHandler}
                      style={{ width: "320px", fontSize: "16px" }}
                    />
                  </div>

                  <div className="input-box21">
                    <label className="details21">Password</label>
                    <input
                      type="password"
                      placeholder="***************"
                      required
                      name="password"
                      value={val.password}
                      onChange={changeHandler}
                      style={{ width: "320px", fontSize: "16px" }}
                    />
                  </div>

                  <p
                    style={{
                      marginBottom: "10px",
                      textAlign: "right",
                      marginRight: "95px",
                      color: "#F58840",
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer"
                    }}
                    onClick={forgotHandler}
                  >
                    Forgot Password?
                  </p>
                </div>

                <button type='submit' className='loginbutton21'>Login</button>
              </form>

              <p className='loginregister21'>
                Don't have an account?{" "}
                <Link to="/signup">
                  <label
                    style={{
                      color: "#F58840",
                      fontWeight: "600",
                      cursor: "pointer"
                    }}
                  >
                    Create Account
                  </label>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
