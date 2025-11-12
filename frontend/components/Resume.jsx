import React, { useState } from "react";
import { useForm } from "react-hook-form";
import jsPDF from "jspdf";
import './resume.css';
import Res from './Res';
import { MdDelete } from "react-icons/md";
import { VscClearAll } from "react-icons/vsc";
import { IoIosAddCircle } from "react-icons/io";
import TextField from '@mui/material/TextField';

export default function Createresume() 
{
  const { register, unregister, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    personalDetails: {
      "full-name": "",
      email: "",
      "Github-link": "",
      linkedin: ""
    },
    experiences: [{}],
    educations: [{}],
    projects: [{}],
    skills: ""
  });
  const [formData2, setFormData2] = useState();

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [...formData.experiences, {}]
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      educations: [...formData.educations, {}]
    });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, {}]
    });
  };

  const removeExperience = (index) => {
    const updatedExperiences = formData.experiences.filter((exp, i) => i !== index);
    setFormData({
      ...formData,
      experiences: updatedExperiences
    });
  };

  const removeEducation = (index) => {
    const updatedEducations = formData.educations.filter((edu, i) => i !== index);
    setFormData({
      ...formData,
      educations: updatedEducations
    });
  };

  const removeProject = (index) => {
    const updatedProjects = formData.projects.filter((project, i) => i !== index);
    setFormData({
      ...formData,
      projects: updatedProjects
    });
  };

  const [sub, setSub] = useState(false);
  const onSubmit = (data) => {
    console.log("data",data);
    setFormData2(data);
    setSub(true);
    generatePDF();
  };

  const generatePDF = () => {
    // PDF generation code remains the same
    
    console.log("form ka data",formData2);
  };
  React.useEffect(() => {
    console.log("form ka data",formData2);
  }, [formData2]);

  return (
    
    <>
    {(sub==true)?<div><Res data={formData2} /></div>
    :
    <div className="container223" style={{backgroundColor:"whitesmoke"}}>
        
      <form action="" className="form223" style={{backgroundColor:"white"}} onSubmit={handleSubmit(onSubmit)}>
        <div className="floral-design"></div>
        <div className="edprjct">
        <div className="personal-details223">
          <h3>Personal Details</h3>
          <div className="Nameid223">
            <label>FULL NAME : </label>
            <TextField id="filled-basic"  variant="filled"
              className="input223"
              label="Full name"
              {...register("personalDetails.full-name", { required: true })}
              type="text"
            />
            <label>Email ID:</label>
            <TextField id="filled-basic"  variant="filled"
              className="input223"
              label="Email"
              {...register("personalDetails.email", { required: true })}
              type="email"
            />
          </div>
          <label>Github Link:</label>
          <TextField id="filled-basic"  variant="filled"
            className="input223"
            label="Github Link"
            {...register("personalDetails.Github-link")}
            type="text"
          />
          <label>Linkedin Profile:</label>
          <TextField id="filled-basic"  variant="filled"
            className="input223"
            label="Linkedin Profile"
            {...register("personalDetails.linkedin", { required: true })}
            type="text"
          />
          <br />
          <button className="add223" type="clear" onClick={addEducation}><VscClearAll/></button>
        </div>

        <div className="experience-container">
          <h3>Experience</h3>
          {formData.experiences.map((experience, index) => (
            <div key={index}>
              <div className="Experience223">
                <label>Company Name:</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                  label="Company name"
                  {...register(`experiences[${index}].company-name`)}
                  type="text"
                />
                <label>Job Title:</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                  label="Job Title"
                  {...register(`experiences[${index}].job-title`)}
                  type="text"
                />
                <br />
                <label>Start Date:</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                 
                  {...register(`experiences[${index}].start-date`)}
                  type="date"
                  min="2000-01-01"
                  max="2024-03-13"
                />
                <label>End Date:</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                  {...register(`experiences[${index}].end-date`)}
                  type="date"
                  min="2000-01-01"
                  max="2024-03-13"
                />
                <br />
              </div>
              <button className="del223" type="button" onClick={() =>
                unregister(`experiences[${index}].company-name`) &&
                removeExperience(index)}><MdDelete/></button>
                <button className="add223" type="button" onClick={addExperience}><IoIosAddCircle/></button>
            </div>
          ))}
        </div>
        </div>
        <div className="edprjct">
        <div className="education-container">
          <h3>Education</h3>
          {formData.educations.map((education, index) => (
            <div key={index}><div className="Education223">
                <label>School Name:</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                  label="School name"
                  {...register(`educations[${index}].school-name`, { required: true })}
                  type="text"
                />
                <label>Degree:</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                  label="Degree"
                  {...register(`educations[${index}].degree`, { required: true })}
                  type="text"
                />
                <br />
                <label>Start Date:</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                  {...register(`educations[${index}].start-date`, { required: true })}
                  type="date"
                  min="2000-01-01"
                  max="2024-03-13"
                />
                <label>End Date:</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                  {...register(`educations[${index}].end-date`, { required: true })}
                  type="date"
                  min="2000-01-01"
                  max="2024-03-13"
                />
                <br />
              </div>
              <button className="del223" type="button" onClick={() => removeEducation(index)}><MdDelete/></button>
              <button className="add223" type="button" onClick={addExperience}><IoIosAddCircle/></button>
            </div>
          ))}
          </div>
        
        <div className="project-container">
          <h3>Projects</h3>
          {formData.projects.map((project, index) => (
            <div key={index}>
              <div className="Projects223">
                
                <label>Project Name:</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                  label="Project name"
                  {...register(`projects[${index}].project-name`, { required: true })}
                  type="text"
                />
                <label>Project Description</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                  label="Give in Details"
                  {...register(`projects[${index}].project-description`, { required: true })}
                  type="text"
                />
                <br />
                <label>Start Date:</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                  {...register(`projects[${index}].start-date`, { required: true })}
                  type="date"
                  min="2000-01-01"
                  max="2024-03-13"
                />
                <label>End Date:</label>
                <TextField id="filled-basic"  variant="filled"
                  className="input223"
                  {...register(`projects[${index}].end-date`, { required: true })}
                  type="date"
                  min="2000-01-01"
                  max="2024-03-13"
                />
                <br />
              </div>
              <button className="del223" type="button" onClick={() => removeProject(index)}><MdDelete/></button>
              <button className="add223" type="button" onClick={addExperience}><IoIosAddCircle/></button>
            </div>
          ))}
          </div>
        </div>

        <div className="Skills223">
          <h3>Skills (comma separated) </h3>
          <label>Skills</label>
          <TextField id="filled-basic"  variant="filled"
            className="input223"
            label=" e.g., HTML,CSS,"
            {...register("skills", { required: true })}
            type="text"
          />
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        <input className="sub223" style={{width: "15rem", margin:"20px 60% 0 60%", border:"2px solid #f58840"}} type="submit" value="Submit" />
        </div>
      </form>
      </div>
    }</>
  );
}
