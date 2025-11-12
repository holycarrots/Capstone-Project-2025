import React from 'react'
import './About.css'
import Carde from './Carde.js'
// import team from "../assets/team.png"
import "animate.css";



const debanjan = "https://res.cloudinary.com/drtqzmu2n/image/upload/v1696853382/UI/debanjan_uiktl1.jpg"
const priyojit = "https://res.cloudinary.com/drtqzmu2n/image/upload/v1696853382/UI/priyojitt_iix6gu.jpg"
const abhinaba = "https://res.cloudinary.com/drtqzmu2n/image/upload/v1696853382/UI/abhinab_dpnii9.jpg"
const shuvam = "https://res.cloudinary.com/drtqzmu2n/image/upload/v1696853546/UI/DP_rxvzij.jpg"
const subho = "https://res.cloudinary.com/drtqzmu2n/image/upload/v1696853382/UI/subhodeep_jryndh.jpg"
const aarti = "https://res.cloudinary.com/drtqzmu2n/image/upload/v1696853382/UI/arti_cbabcc.jpg"
const About = () => {
  return (
    <div className="x65" >

      <div className="g111 wow animate__slideInDown animate__animated animate_slower" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5rem" }}>

        <h2 style={{ fontSize: "4rem", fontFamily: "Merriweather, serif" }} className="s">Who <span className="r" style={{ paddingLeft: "1.2rem", fontSize: "4rem", fontFamily: "Merriweather, serif" }}>We Are</span></h2>

        <p style={{ fontSize: "2.4rem", width: "70vw", fontFamily: "Inter, sans-serif", lineHeight: "3.7rem", textAlign: "center", marginBottom: "40px",color:"grey" }}> <span class style={{ color: "#F58840", fontSize: "30px" }}>"</span> We are team Hexacoders. We believe in providing a better business experience for disability people.
          This platform provide information on job openings, skill development programs, and career resources for persons
          with disabilities.<span class style={{ color: "#F58840", fontSize: "30px" }}>"</span>
        </p>

      </div>

      {/* Above section is who we are */}

      <div style={{ padding: "2rem 10rem", backgroundColor: "#F6F0F0", boxShadow: "8px 6px 10px 0px rgba(0, 0, 0, 0.30)" }}>
        <div style={{ marginBottom: "2.5rem", minWidth: "2rem", }} className='mis65'>
          <h1 style={{ fontSize: "4rem" }}>Our Mission</h1>
          <hr style={{ width: "25rem", height: "6px", backgroundColor: "#F58840", marginTop: "0" }}></hr>
        </div>

        <div className='mission88'>

          <div className='para88' style={{color:"grey",fontFamily:"Inter, sans-serif",fontSize:"2.2rem"}}>
            This is a transformative web application project aimed at addressing the critical issue of employment for differently-abled individuals in India.With approximately 9.035 crore individuals facing disabilities, many remain uninformed about the available opportunities.  <br /><br />To bridge this gap, a user-friendly web app has been developed with key features such as profile customization, data security, and privacy. Users can search for jobs based on skills and disabilities, access training and courses, and pursue fulfilling careers. <br /><br /> The aim is to create a more inclusive society where everyone can contribute and achieve their dreams, regardless of ability.
          </div>

          <div className='paraimg88'>
            <img src="https://res.cloudinary.com/drtqzmu2n/image/upload/v1696240176/UI/Team-cuate_1_u9qqqn.png" alt='doing it' />
          </div>

        </div>
      </div>

      {/* Above section is misssion */}



      {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3rem", marginTop: "2rem", marginBottom: "4rem" }}>

        <h2 className="tem88" style={{ fontFamily: "Merriweather, serif", fontSize: "4rem", marginTop: "50px", marginBottom: "20px" }}>Meet Our<span style={{ color: "#F58840" }}> Team</span></h2>


        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", width: "80vw", gap: "5rem" }}>

          <Carde name="Aarti Kumari" role="Frontend Developer" email="mailto:aartirathore2004@gmail" url={aarti} github="https://github.com/Aartis9" li="https://www.linkedin.com/in/aarti-singh-685606285/" />

          <Carde name="Debanjan Malakar" role=" Backend Developer" email="mailto:debanjan.atthework@gmail.com" url={debanjan} github="g3" li="https://www.linkedin.com/in/debanjan-malakar/" />


          <Carde name=" Abhinaba Paul" role="Frontend Developer" email="mailto:abhinabapaul48814@gmail.com " url={abhinaba} github="https://github.com/AbhinabaPaul007" li="https://www.linkedin.com/in/abhinaba-paul-655835238/" />

          <Carde name="Priyojit Kundu" role=" Frontend Developer" email="mailto:kundupriyojit21@gmail.com" url={priyojit} github="https://github.com/priyojit21" li="https://www.linkedin.com/in/priyojit-kundu-37a024238/" />


          <Carde name="Shuvam Sardar " role=" Backend Developer" email="mailto:shuvamsardar2002@gmail.com" url={shuvam} github="https://github.com/shuvamsardar" li="https://www.linkedin.com/in/shuvam-sardar/" />

          <Carde name="Subhodeep M." role="UI/UX" email="mailto:subhodeepmukherjee72@gmail.com" url={subho} github="https://github.com/tubaiuzumakiWorld" li="https://www.linkedin.com/in/subhodeep-mukherjee-159510243/" />

         </div>

       </div> */}

    </div>
  )
}

export default About
