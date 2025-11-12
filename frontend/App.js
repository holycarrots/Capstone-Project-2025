import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./container/Home";
import Resources from './container/Resources';
// import Headnav from "./components/Headnav"
import Signup from "./components/Signup"
import Loginuser from "./components/Loginuser"
import Profile from "./components/Profile"

import Footer from './components/Footer';
import { useState, useEffect } from 'react';
// import Onejob from './components/Onejob';
import About from './components/About';
import Contact from "./components/Contact";
// import Jobssec from './components/Jobssec';
// import Goverment from './components/Goverment';
// import { BiLogIn } from 'react-icons/bi';


// import payment compo
import Product from "./components/Product"
import Success from "./components/Success"
import Failure from "./components/Failure"

// import resume compo
import Resume from "./components/Resume"

import ScrollToTop from './components/ScrollToTop';


//  HERE  ######### SBH FINAL
import PostButton from "./components/PostButton"
import Form from './components/Form'
import AllJobList from './components/AllJobList';


function App() {
  const [isLoggedIn, setLoggedin] = useState(true);


  return (
    <div className="App">

    <ScrollToTop />

      <Navbar isLoggedIn={isLoggedIn} />

      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/courses" element={<Resources />} />

        {/* <Route exact path="/jobs" element={<Headnav />} /> */}

        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/login" element={<Loginuser />} />

        <Route exact path="/profile" element={<Profile />} />

        {/* <Route exact path="/onejob" element={<Onejob />} /> */}

        <Route exact path="/about" element={<About />} />

        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/jobs" element={<AllJobList />} />

        <Route exact path="/form" element={<Form />} />


        {/* Payment routes */}

        <Route path="/product" Component={Product} />
        <Route path="/success" Component={Success} />
        <Route path="/failure" Component={Failure} />

        {/* Resume routes */}
        <Route exact path="/resume" element={<Resume />} />

      </Routes>

      <Footer />


    </div>
  );
}

export default App;


// #f58840

// #grad {
//   background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
// }

// background-image: url("https://img.freepik.com/premium-photo/abstract-background-design-images-wallpaper-ai-generated_643360-270191.jpg");