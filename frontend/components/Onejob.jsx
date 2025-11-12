import React from 'react'
import { Link } from 'react-router-dom';
import './Onejob.css'
import { HiBuildingOffice } from "react-icons/hi2";
import { FaClinicMedical } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { PiCurrencyInrBold } from "react-icons/pi";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoArrowRedo } from "react-icons/io5";
export default function Onejob({ title, _id, description, city, workType, company, applyLink, skills, disabilityType, minSalary, maxSalary, experience, job_id, inv_mode, address }) {
  return (
    <>
      <div className='onejobabout21'>
        <div className='oneaboutthejob21'>
          <div>
            <h3 style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: " 'Merriweather', 'serif' " }} className='hehe21'>Job Description</h3>
            <div>
              <p style={{ marginLeft: "20px", color: "#777", fontSize: "12px", fontWeight: "600" }}>{company} | {workType} | {city}</p>
            </div>
          </div>


          <div>
            <Link to={`${applyLink}`}>
              <button style={{ marginLeft: "280px",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px"}} className='oneviewbutton21'>
                <IoArrowRedo size={15} style={{ marginBottom: "4px", marginRight: "4px" }} />
                Apply
              </button>
            </Link>
          </div>

        </div>
        <div className='oneaboutdesc21'>
          <p>{description.split(" ").slice(0, 150).join(" ") + "..."}</p>
          <br />

          <hr className='liner03' />

          <div style={{ paddingTop: "10px" }}>
            <h3>Job Requirements</h3>

            <div style={{ display: "flex", gap: "200px", paddingTop: "10px" }}>

              <div style={{ display: "flex", gap: "10px" }}>
                {/* <img style={{ width: "20px", height: "20px", mixBlendMode: "multiply" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBfaQaBsb-Pe252MmEK7jJukNBkgWB7NySb8iq0E4LCZ_chWlxn1Yr63L-hdlz9GvzDo&usqp=CAU" alt="worktype" /> */}
                <HiBuildingOffice style={{ marginTop: "5px" }} size={20} color='#777' />

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "#777" }} >Experience</p>
                  <p style={{ paddingBottom: "3px" }}>{experience}</p>
                </div>

              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                {/* <img style={{ width: "20px", height: "20px", mixBlendMode: "multiply" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBfaQaBsb-Pe252MmEK7jJukNBkgWB7NySb8iq0E4LCZ_chWlxn1Yr63L-hdlz9GvzDo&usqp=CAU" alt="worktype" /> */}
                <PiCurrencyInrBold style={{ marginTop: "5px" }} size={20} color='#777' />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "#777" }}>Salary Structure</p>
                  <p >{minSalary}K - {maxSalary}K</p>
                </div>
              </div>



            </div>

            <div style={{ display: "flex", gap: "200px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                {/* <img style={{ width: "20px", height: "20px", mixBlendMode: "multiply" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBfaQaBsb-Pe252MmEK7jJukNBkgWB7NySb8iq0E4LCZ_chWlxn1Yr63L-hdlz9GvzDo&usqp=CAU" alt="worktype" /> */}
                <FaClinicMedical style={{ marginTop: "5px" }} size={20} color='#777' />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "#777" }}>Disability Type</p>
                  <p >{disabilityType}</p>
                </div>
              </div>
            </div>

          </div>

          <hr className='liner03' />

          <div style={{ paddingTop: "10px" }}>
            <h3>Job Role</h3>

            <div style={{ display: "flex", gap: "165px", paddingTop: "10px" }}>

              <div style={{ display: "flex", gap: "10px" }}>
                {/* <img style={{ width: "20px", height: "20px", mixBlendMode: "multiply" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBfaQaBsb-Pe252MmEK7jJukNBkgWB7NySb8iq0E4LCZ_chWlxn1Yr63L-hdlz9GvzDo&usqp=CAU" alt="worktype" /> */}
                <MdAccessTimeFilled style={{ marginTop: "5px" }} size={20} color='#777' />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "#777" }}>Employement Type</p>
                  <p >{workType}</p>
                </div>
              </div>


              <div style={{ display: "flex", gap: "10px" }}>
                {/* <img style={{ width: "20px", height: "20px", mixBlendMode: "multiply" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBfaQaBsb-Pe252MmEK7jJukNBkgWB7NySb8iq0E4LCZ_chWlxn1Yr63L-hdlz9GvzDo&usqp=CAU" alt="worktype" /> */}
                <RiGraduationCapFill style={{ marginTop: "5px" }} size={20} color='#777' />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "#777" }}>Skills</p>
                  <p >{skills}</p>
                </div>
              </div>

            </div>

            <div>
              <div style={{ display: "flex", gap: "10px" }}>
                {/* <img style={{ width: "20px", height: "20px", mixBlendMode: "multiply" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBfaQaBsb-Pe252MmEK7jJukNBkgWB7NySb8iq0E4LCZ_chWlxn1Yr63L-hdlz9GvzDo&usqp=CAU" alt="worktype" /> */}
                <IoPerson style={{ marginTop: "5px" }} size={20} color='#777' />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "#777" }}>Role/Category </p>
                  <p >{title}</p>
                </div>
              </div>
            </div>

          </div>

          <hr className='liner03' />

          <div style={{ paddingTop: "10px" }}>
            <h3>Interview & address details</h3>

            <div style={{ display: "flex", gap: "200px", paddingTop: "10px" }}>

              <div style={{ display: "flex", gap: "10px" }}>
                {/* <img style={{ width: "20px", height: "20px", mixBlendMode: "multiply" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBfaQaBsb-Pe252MmEK7jJukNBkgWB7NySb8iq0E4LCZ_chWlxn1Yr63L-hdlz9GvzDo&usqp=CAU" alt="worktype" /> */}
                <FaAddressBook style={{ marginTop: "5px" }} size={20} color='#777' />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "#777" }}>Company Address</p>
                  <p >{address}</p>
                </div>
              </div>
            </div>

            <div>
              <div style={{ display: "flex", gap: "10px" }}>
                {/* <img style={{ width: "20px", height: "20px", mixBlendMode: "multiply" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBfaQaBsb-Pe252MmEK7jJukNBkgWB7NySb8iq0E4LCZ_chWlxn1Yr63L-hdlz9GvzDo&usqp=CAU" alt="worktype" /> */}
                <IoIosCall style={{ marginTop: "5px" }} size={20} color='#777' />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "#777" }}>Interview mode</p>
                  <p >{inv_mode}</p>
                </div>
              </div>
            </div>

          </div>
          <hr className='liner03' style={{ paddingBottom: "10px" }} />
          <p style={{ fontSize: "12px", color: "#777" }}>Job ID: {job_id}</p>

        </div>
      </div>
    </>
  )
}
