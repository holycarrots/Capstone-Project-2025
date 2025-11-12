import React from 'react';
import './Res.css'; 
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
function ResumePage({ data }) {
  const { educations, experiences, personalDetails, projects, skills } = data;
  const [loader, setLoader] = useState(false);

  const downloadPDF = () =>{
    const capture = document.querySelector('.page-content');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('resume.pdf');
    })
  }

  return (
    <>
    <div className="resume-container">
      <div className="page-content">
        {/* Personal Details */}
        <div className="section">
          <h2>Personal Detail</h2>
          <div className='resdiv224'>
                <div><strong>Full Name:</strong> {personalDetails['full-name']}</div>
                <div><strong>Email:</strong> {personalDetails['email']}</div>
          </div>
          
          <div><strong>Github:</strong> {personalDetails['Github-link']}</div>
          <div><strong>LinkedIn:</strong> {personalDetails['linkedin']}</div>
        </div>
      
        <hr />

        {/* Education */}
        <div className="section">
          <h2>Education</h2>
          {educations.map((edu, index) => (
            <div key={index}>
              
              <p><strong>Degree:</strong> {edu['degree']}</p>
              <p><strong>School:</strong> {edu['school-name']}</p>
              <p><strong>Start Date:</strong> {edu['start-date']}</p>
              <p><strong>End Date:</strong> {edu['end-date']}</p>
            </div>
          ))}
        </div>
        <hr />

        {/* Experiences */}
        <div className="section">
          <h2>Experiences</h2>
          {experiences.map((exp, index) => (
            <div key={index}>
              <p><strong>Company:</strong> {exp['company-name']}</p>
              <p><strong>Job Title:</strong> {exp['job-title']}</p>
              <p><strong>Start Date:</strong> {exp['start-date']}</p>
              <p><strong>End Date:</strong> {exp['end-date']}</p>
            </div>
          ))}
        </div>
        <hr />

        {/* Projects */}
        <div className="section">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div key={index}>
              <p><strong>Project Name:</strong> {project['project-name']}</p>
              <p><strong>Description:</strong> {project['project-description']}</p>
              <p><strong>Start Date:</strong> {project['start-date']}</p>
              <p><strong>End Date:</strong> {project['end-date']}</p>
            </div>
          ))}
        </div>
        <hr />

        {/* Skills */}
        <div className="section">
          <h2>Skills</h2>
          <p>{skills}</p>
        </div>
      </div>
    </div>
    <div className="receipt-actions-div">
            <div className="actions-right">
              <button
                className="receipt-modal-download-button"
                onClick={downloadPDF}
                disabled={!(loader===false)}
              >
                {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download</span>
                )}

              </button> 
            </div>
          </div>

    </>
  );
}

export default ResumePage;
