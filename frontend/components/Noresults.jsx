import React from 'react';
import './Noresults.css';

export default function Noresults() {
  const demoJobs = [
    {
      company: 'RITES LIMITED',
      role: 'Manager Civil',
      place: 'All India',
      salary: '₹600k - 1920k',
      link: 'https://www.ncs.gov.in/Pages/ViewJobDetails.aspx?A=w1BcJXzB%2BW4%3D&U=&JSID=8N7EPoYZzgE%3D&RowId=8N7EPoYZzgE%3D&OJ=',
    },
    {
      company: 'CSIR-CCMB',
      role: 'Senior Scientist and Scientists',
      place: 'Hyderabad; Telangana',
      salary: '₹Not Specified',
      link: 'https://www.ncs.gov.in/Pages/Search.aspx?DA=https://www.ncs.gov.in/Pages/ViewJobDetails.aspx?A=w1BcJXzB%2BW4%3D&U=&JSID=AaN2GgUdhUY%3D&RowId=AaN2GgUdhUY%3D&OJ=7k4L7QQ5IOM%3D%3D',
    },
    {
      company: 'RITES LIMITED',
      role: 'Senior Technical Assistant Civil',
      place: 'All India',
      salary: '₹196k - 356k',
      link: 'https://www.ncs.gov.in/Pages/ViewJobDetails.aspx?A=w1BcJXzB%2BW4%3D&U=&JSID=xxO5gAr9M7Y%3D&RowId=xxO5gAr9M7Y%3D&OJ=7k4L7QQ5IOM%3D',
    },
    {
      company: 'PSN SUPPLY CHAIN',
      role: 'Associates',
      place: 'Jhajjar; Haryana',
      salary: '₹128k - 228k',
      link: 'https://www.ncs.gov.in/Pages/ViewJobDetails.aspx?A=2JzrhpW1Z9I%3D&U=&JSID=hdWLb2wBGYw%3D&RowId=hdWLb2wBGYw%3D',
    },
    {
      company: 'Mumbai Customs',
      role: 'Canteen Attendant',
      place: 'Mumbai; Maharashtra',
      salary: '₹Not Specified',
      link: 'https://www.ncs.gov.in/Pages/ViewJobDetails.aspx?A=2JzrhpW1Z9I%3D&U=&JSID=hKFVmfCVsCU%3D&RowId=hKFVmfCVsCU%3D',
    },
    {
      company: 'Central Warehousing Corporation',
      role: 'Junior Personal Assistant',
      place: 'All India',
      salary: '₹Not Specified',
      link: 'https://www.ncs.gov.in/Pages/ViewJobDetails.aspx?A=2JzrhpW1Z9I%3D&U=&JSID=6qKLHL0voS0%3D&RowId=6qKLHL0voS0%3D',
    },
  ];

  return (
    <div className="noresults-container">
      <h2 className="suggested-jobs-title">Explore Popular Jobs</h2>
      <div className="suggested-jobs-grid">
        {demoJobs.map((job, index) => (
          <div className="suggested-job-card" key={index}>
            <h3 className="suggested-job-company">{job.company}</h3>
            <p className="suggested-job-role">{job.role}</p>
            <p className="suggested-job-place">📍 {job.place}</p>
            <p className="suggested-job-salary">{job.salary}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              <button className="suggested-details-btn">View Details</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
