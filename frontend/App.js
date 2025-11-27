import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./container/Home";
import Resources from './container/Resources';
import Signup from "./components/Signup"
import Loginuser from "./components/Loginuser"
import Profile from "./components/Profile"
import Footer from './components/Footer';
import { useState } from 'react';
import About from './components/About';
import Contact from "./components/Contact";
import Product from "./components/Product"
import Success from "./components/Success"
import Failure from "./components/Failure"
import Resume from "./components/Resume"
import ScrollToTop from './components/ScrollToTop';
import PostButton from "./components/PostButton"
import Form from './components/Form'
import AllJobList from './components/AllJobList';

// Import Privacy and Terms components
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function App() {
  const [isLoggedIn, setLoggedin] = useState(true);

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar isLoggedIn={isLoggedIn} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/courses" element={<Resources />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Loginuser />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/jobs" element={<AllJobList />} />
        <Route exact path="/form" element={<Form />} />

        {/* Payment routes */}
        <Route path="/product" element={<Product />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />

        {/* Resume routes */}
        <Route exact path="/resume" element={<Resume />} />

        {/* Privacy and Terms of Use routes */}
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
