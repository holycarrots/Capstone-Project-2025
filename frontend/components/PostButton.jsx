// Done

import React, { useEffect } from 'react'
// import './Button.css'
import './PostButton.css'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import AlljobCard from './AlljobCard';
import Noresults from './Noresults';
import "animate.css"
// import Form from './Form';





export default function PostButton({jobs}) {

  const navigate = useNavigate();

  //new
  // const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [jobTypeFilter, setJobTypeFilter] = useState('');
  // const [filteredJobs, setFilteredJobs] = useState([]);
  // const [filterType, setFilterType] = useState('all');
  const [jobType, setJobType] = useState('all');
  const [workType, setWorkType] = useState('all');
  const [disabilityType, setDisabilityType] = useState('all');
  let jobing = [];



  // useEffect(() => {
  //   const fetchAllJob = async () => {
  //     const allJob = await axios.get(`http://localhost:5000/api/v1/pvtjob`);
  //     jobing = allJob.data;
  //     const data1 = jobing.pvtjobs;
  //     setJobs(data1.reverse());
  //   }
  //   fetchAllJob();
  // }, []);

  // const filteredItems = job.filter(j =>
  //   j.title.toLowerCase().includes(query.toLowerCase())
  // );


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  };

  const handleWorkTypeChange = (e) => {
    setWorkType(e.target.value);
  };

  const handleDisabilityTypeChange = (e) => {
    setDisabilityType(e.target.value);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setJobType('all');
    setWorkType('all');
    setDisabilityType('all');
  };

  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.skills.toLowerCase().includes(searchTerm.toLowerCase());
    const jobTypeMatch = jobType === 'all' || job.jobType.toLowerCase() === jobType;
    // not applied till now ,change in schema
    const workTypeMatch = workType === 'all' || job.workType.toLowerCase() === workType;
    const disabilityTypeMatch =
      disabilityType === 'all' || job.disabilityType.includes(disabilityType);
    return titleMatch && jobTypeMatch && workTypeMatch && disabilityTypeMatch;
  });


  function handlePost() {
    navigate("/form");
  }
  return (
    <div>
      <div className='PostArea21'>

        <div className='bannerb01'>

          <div className='postButton21'>
            <div>
              <label style={{ marginRight: "10px", paddingTop: "4px", fontWeight: "bold", fontSize: "3.5rem",color:"white" }} >Would you Like to Post a Job?</label>
            </div>
            <div>
              <button className='buttonpost-21' style={{ backgroundColor: "white", fontSize: "1.7rem",color:"#E37032",fontWeight:"bolder", }} onClick={handlePost}>Post Job</button>
            </div>
          </div>


          <div className='filterButton21'>
            <div className='box21'>
              <FaSearch className='icon21' />
              <input
                type="text"
                placeholder='Search by position or skills'
                className='filtersearch21'
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>


            <select value={jobType} onChange={handleJobTypeChange} className='jobtypefilter21'>
              <option value="all">All Job Types</option>
              <option value="government">Government</option>
              <option value="private">Private</option>
            </select>

            <select value={disabilityType} onChange={handleDisabilityTypeChange} className='jobtypefilter21'>
              <option value="all">All Disabilities</option>
              <option value="Dwarfism">Dwarfism</option>
              <option value="Blindness">Blindness</option>
              <option value="Cerebral Palsy">Cerebral Palsy</option>
              <option value="Hemophilia">Hemophilia</option>
              <option value="Acid Attack victim">Acid Attack victim</option>
              <option value="Parkinson's disease">Parkinson's disease</option>
              <option value="Intellectual Disability">Intellectual Disability</option>
            </select>

            <select value={workType} onChange={handleWorkTypeChange} className='worktypefilter21'>
              <option value="all">All Work Types</option>
              <option value="remote">Remote</option>
              <option value="full time">Full Time</option>
            </select>

            <button onClick={handleResetFilters} className='button-21' style={{ backgroundColor: "rgb(227, 227, 227)", color: "black", fontSize: "1.5rem", padding:"1rem 3rem", border:"none", borderRadius:"8px"}}>Reset</button>
          </div>

          <p style={{color:"white",fontSize:"2.4rem",margin:"1rem 4rem"}}>Choose Category to browse jobs easily</p>

        </div>


        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "flex-start", gap: "2rem" }}>

          <div style={{display:"flex", flexDirection:"column",gap:"5rem"}}>

            {/* <div style={{marginTop:"3rem"}}>
              <p style={{color:"black",fontSize:"4rem"}}>Choose the category<br/> where you expert.</p>
            </div> */}

            <div className='wow animate__slideInLeft animate__animated animate_slower' style={{ width: "400px", height: "auto", backgroundColor: "#EF9A17", borderRadius: "20px", marginTop: "4rem" }}>

              <div style={{ paddingLeft: "20px", paddingTop: "2rem",color:"white" }}>
                <h1 style={{ fontSize: "4rem" }} className="hover-underline-animation">Job Sectors</h1>
              </div>

              <div style={{ paddingTop: "2px" ,fontSize:"1.8rem",paddingLeft:"1.8rem",paddingRight:"1.8rem",paddingBottom:"2rem",}}>
              <ul>
                <li style={{ marginBottom: "10px" }} className='listItem03'>General</li>
                <li style={{ marginBottom: "10px" }} className='listItem03'>Accounting, Auditing & Finance</li>
                <li style={{ marginBottom: "10px" }} className='listItem03'>Administrative & Office</li>
                <li style={{ marginBottom: "10px" }} className='listItem03'>Agriculture & Farming</li>
                <li style={{ marginBottom: "10px" }} className='listItem03'>Building & Architecture</li>
                <li style={{ marginBottom: "10px" }} className='listItem03'>Creative & Design</li>
                <li style={{ marginBottom: "10px" }} className='listItem03'>Food Services & Catering</li>
                <li style={{ marginBottom: "10px" }} className='listItem03'>Legal Services</li>
              </ul>
            </div>

            </div>

            <div className='wow animate__slideInLeft animate__animated animate_slower'>
              <img 
                src='https://www.myvi.in/content/dam/vodafoneideadigital/StaticPages/consumerimages/careers/careers-at-vil.png'
                width={500}
                height={400}
              />
            </div>

          </div>


          <div className='wow animate__slideInUp animate__animated animate_slower' >
            {

              filteredJobs.length > 0 ? (
                <ul>
                  {
                    filteredJobs.map((j) => {
                      return <div >
                      <AlljobCard applyLink={j.applyLink} city={j.city} description={j.description} maxSalary={j.maxSalary} minSalary={j.minSalary} title={j.title} skills={j.skills} company={j.company} jobType={j.jobType} workType={j.workType} disabilityType={j.disabilityType} key={j._id} createdAt={j.createdAt} experience={j.experience} job_id={j.job_id} address={j.address} inv_mode={j.inv_mode} />
                      </div>
                    })}
                </ul>
              ) :
                (
                  <div className='noJobs03'>
                    <Noresults />
                  </div>

                )
            }
          </div>

        </div>
        
      </div>

    </div>
  )
}