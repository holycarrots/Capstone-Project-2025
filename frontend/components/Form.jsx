import React from 'react'
import { useState } from 'react';
import './Form.css'
import { Navigate, useNavigate } from 'react-router-dom';
// import AllJobList from './AllJobList';
export default function Form() {

    const [reg, setReg] = useState({
       email:"", title: "", city: "", applyLink: "", skills: "", minSalary: "", maxSalary: "", jobType: "", workType: "", description: "", company: "", experience: "", inv_mode: "", job_id:"",address:"",disabilityType:""});


    const navigate = useNavigate();
    // const[flag,setFlag] = useState(false);

    function changeHandler(event) {

        setReg(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        });
    }


    const saveHandler = async (event) => {
        event.preventDefault();
        console.log(reg);

        // FRONTEND K BACKEDN ER SATHE CONNECT KORLAM (FRONT END A DATA DILE MONGODB TE AUTOMATIC DATA SAVE HOBE)
        try {
            const response = await fetch(`http://localhost:5000/api/v1/pvtjob`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(reg)
            });

            if (response.ok) {
                setReg({
                    email: "",title: "", city: "", applyLink: "", skills: "", minSalary: "", maxSalary: "", jobType: "", description: "", workType: "", job_id:"",experience: "", inv_mode: "", address:"",disabilityType: ""
                    })
                navigate("/jobs");
            }
        }
        catch (error) {
            console.log(error);
        }

    }


    return (
        <div style={{display:"flex",justifyContent:"center",marginRight:"4rem"}}>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",width:"60%" }}>
                <div style={{ paddingTop: "10px",paddingBottom:"1.5rem",fontWeight:"bolder", }}>
                    <h2>Post for the Job </h2>
                </div>

                <form className='post-form' action="" style={{padding:"2rem",marginBottom:"4rem",borderRadius:"15px"}}>
                    <div style={{ display: "flex", gap: "50px" }}>
                        <div style={{ display: "flex", flexDirection: "column" }} >
                            <label htmlFor="title" style={{color:"#f58840"}}>Job Title</label>
                            <input type="text" style={{ width: "230px" }} name="title" value={reg.title} onChange={changeHandler} placeholder='Graphic Designer' />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor="city" style={{color:"#f58840"}}>City</label>
                            <input type="text" style={{ width: "230px" }} name="city" value={reg.city} onChange={changeHandler} placeholder='Kolkata' />
                        </div>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="applyLink" style={{color:"#f58840"}}>Apply Link</label>
                        <br />
                        <input type="text" style={{ width: "100%" }} name='applyLink' value={reg.applyLink} onChange={changeHandler} placeholder='www.xyz.com' />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email" style={{color:"#f58840"}}>Email</label>
                        <br />
                        <input type="email" style={{ width: "100%", padding: "8px",border:"none",backgroundColor:"#e3e3e3" }} name='email' value={reg.email} onChange={changeHandler} placeholder='abc@gmail.com' />
                    </div>
                    <br />
                    <div>
                        {/* <label htmlFor="disabilityType" style={{color:"#f58840"}}>Disability Type</label>
                        <br />
                        <select name="disabilityType" id="disabilityType" value={reg.disabilityType} onChange={changeHandler} style={{ width: "100%", padding: "8px" }}>
                            <option value="Dwarfism">Dwarfism</option>
                            <option value="Blindness">Blindness</option>
                            <option value="Cerebral Palsy">Cerebral Palsy</option>
                            <option value="Hemophilia">Hemophilia</option>
                            <option value="Acid Attack victim">Acid Attack victim</option>
                            <option value="Parkinson's disease">Parkinson's disease</option>
                            <option value="Intellectual Disability">Intellectual Disability</option>
                        </select> */}

                        <div style={{ display: "flex", gap: "50px" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="disabilityType" style={{color:"#f58840"}}>Disability Type</label>
                                {/* <br /> */}
                                <select name="disabilityType" id="disabilityType" value={reg.disabilityType} onChange={changeHandler} style={{ width: "230px", padding: "8px" }}>
                                    <option value="Dwarfism">Dwarfism</option>
                                    <option value="Blindness">Blindness</option>
                                    <option value="Cerebral Palsy">Cerebral Palsy</option>
                                    <option value="Hemophilia">Hemophilia</option>
                                    <option value="Acid Attack victim">Acid Attack victim</option>
                                    <option value="Parkinson's disease">Parkinson's disease</option>
                                    <option value="Intellectual Disability">Intellectual Disability</option>
                                </select>
                                {/* <input type="text" style={{ width: "230px" }} name="jobType" value={reg.jobType} onChange={changeHandler} /> */}
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="job_id" style={{color:"#f58840"}}>Job ID</label>
                                <input type="text" style={{ width: "230px" }} name="job_id" value={reg.job_id} onChange={changeHandler} placeholder='XXXXXX' />
                                {/* <input type="text" style={{ width: "230px" }} name="workType" value={reg.workType} onChange={changeHandler} /> */}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor="skills" style={{color:"#f58840"}}>Skills</label>
                            <input type="text" name="skills" value={reg.skills} onChange={changeHandler} placeholder='Skills which suit your work...' />
                        </div>

                        <br />
                        <div style={{ display: "flex", gap: "50px" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="jobType" style={{color:"#f58840"}}>Job Type</label>
                                <select name="jobType" id="jobType" value={reg.jobType} onChange={changeHandler} style={{ width: "230px", padding: "8px" }}>
                                    <option value="" disabled selected hidden>Job Type...</option>
                                    <option value="Government">Government</option>
                                    <option value="Private">Private</option>
                                </select>
                                {/* <input type="text" style={{ width: "230px" }} name="jobType" value={reg.jobType} onChange={changeHandler} /> */}
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="workType" style={{color:"#f58840"}}>Work Type</label>
                                <select name="workType" id="workType" value={reg.workType} onChange={changeHandler} style={{ width: "230px", padding: "8px" }}>
                                    <option value="" disabled selected hidden>Work Type...</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Remote">Remote</option>
                                </select>
                                {/* <input type="text" style={{ width: "230px" }} name="workType" value={reg.workType} onChange={changeHandler} /> */}
                            </div>
                        </div>
                        <br />
                        <div style={{ display: "flex", gap: "50px" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="experience" style={{color:"#f58840"}}>Experience</label>
                                <select name="experience" id="experience" value={reg.experience} onChange={changeHandler} style={{ width: "230px", padding: "8px",border:"none",backgroundColor:"#e3e3e3" }}>
                                    <option value="" disabled selected hidden>Experience...</option>
                                    <option value="fresher">Fresher</option>
                                    <option value="1-3">1-3</option>
                                    <option value="4-8">4-8</option>
                                    <option value="10+">10+</option>
                                </select>
                                {/* <input type="text" style={{ width: "230px" }} name="jobType" value={reg.jobType} onChange={changeHandler} /> */}
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="inv_mode" style={{color:"#f58840"}}>Interview Mode</label>
                                <select name="inv_mode" id="inv_mode" value={reg.inv_mode} onChange={changeHandler} style={{ width: "230px", padding: "8px", border:"none",backgroundColor:"#e3e3e3" }}>
                                    <option value="" disabled selected hidden>Interview Mode...</option>
                                    <option value="Walkin">Walkin</option>
                                    <option value="Telephonic">Telephonic</option>
                                </select>
                                {/* <input type="text" style={{ width: "230px" }} name="workType" value={reg.workType} onChange={changeHandler} /> */}
                            </div>
                        </div>
                        <br />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor="company" style={{color:"#f58840"}}>Company Name</label>
                            <input type="text" name="company" value={reg.company} onChange={changeHandler} placeholder='Udyog Saarthi' />
                        </div>
                        <br />
                        
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor="address" style={{color:"#f58840"}}>Company Address</label>
                            <input type="text" name="address" value={reg.address} onChange={changeHandler} placeholder='saltlake city' />
                        </div>
                    </div>

                    <br />

                    <div style={{ display: "flex", gap: "50px" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor="minSalary" style={{color:"#f58840"}}>Minimum Salary (in K)</label>
                            <input type="text" style={{ width: "230px" }} name="minSalary" value={reg.minSalary} onChange={changeHandler} placeholder='20K' />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor="maxSalary" style={{color:"#f58840"}}>Maximum Salary (in K)</label>
                            <input type="text" style={{ width: "230px" }} name="maxSalary" value={reg.maxSalary} onChange={changeHandler} placeholder='60K' />
                        </div>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="description" style={{color:"#f58840"}}>Job description</label>
                        <br />
                        <textarea name="description" cols="65" rows="5" value={reg.description} onChange={changeHandler} placeholder='Job description of your company here...' className='textareab02'></textarea>
                    </div>
                    <br />
                    
                        <button style={{backgroundColor:"#f58840",padding:"0.8rem 2.5rem",color:"white",border:"1px solid #f58840",borderRadius:"10px",marginLeft:"40%"}} onClick={saveHandler}>Submit</button>
                    

                </form>
            </div>

            <div style={{width:"40%",display:"flex",flexDirection:"column",gap:"10rem",marginTop:"5%"}}>
                <div>
                    <p style={{fontSize:"4.5rem",marginBottom:"0"}}>You're here to <span style={{color:"#f58840"}}>hire</span>.</p>
                    <p style={{fontSize:"4.5rem",marginBottom:"1rem"}}>We're here to <span style={{color:"#f58840"}}>help</span>.</p>
                    <p style={{fontSize:"2.5rem"}}>Post your job to interview candidates, and make offers all on <span style={{color:"#f58840"}}>Udyog Saarthi</span>.Start hiring today!
                    </p>
                </div>

                <img 
                    src='https://ezjobs.io/wp-content/uploads/2023/02/MicrosoftTeams-image-5-1.png'
                    width={500}
                    height={370}
                />
            </div>

        </div>
    )
}









