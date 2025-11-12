import React from 'react';
import Easy from '../components/Easy';
import Heading from '../components/Heading';
import Companies from '../components/Companies';
import Jobs from '../components/Jobs';
import Courses from '../components/Courses';
import Story from '../components/Story';
// import Footer from '../components/Footer';
// import { useState } from 'react';

const Home = () => {


  return (
    <div>

      {/* Heading section for home page */}
      <Heading />

      {/* Showing comapnies section for home page */}
      <Companies />

      {/* Showing jobs section for home page */}
      <Jobs />

      <Easy />

      {/* Showing courses and training section for home page */}
      <Courses />

      {/* Showing story of our website in home page */}
      <Story />

      {/* Showing footer section for home page */}
      {/* <Footer /> */}

    </div>
  );
}

export default Home;
