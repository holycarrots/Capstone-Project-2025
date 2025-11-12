import React from 'react';
import "./Change.css"
import { useState, useEffect } from 'react';
import asse from "../assets/asset12.jpg"
import { Dialog } from 'primereact/dialog';
import Avatar from 'react-avatar-edit'
// import CreatableSelect from "react-select/creatable"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';



const Change = () => {
  const navigate = useNavigate()
  const token = sessionStorage.getItem('token');
  const gmi = sessionStorage.getItem('gmi');
  const id = sessionStorage.getItem('id');

  const [profileData, setProfileData] = useState({ firstName: "", lastName: "", image: "", email: "", assistiveDevice: "", dateOfBirth: "", disabilityType: "", education: "", gender: "", mobileNumber: "", institute: "", udid: "", skills: "" })
  useEffect(() => {
    fetchProfile();

  }, [token]);

  const fetchProfile = async () => {
    try {
      console.log(token);
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/profile/getuserdetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });
      const data = await response.json();

      const { firstName, lastName, image, email, assistiveDevice, dateOfBirth, disabilityType, education, gender, mobileNumber, institute, udid, skills } = data.data;

      sessionStorage.setItem("gmi", image)


      setProfileData({
        firstName, lastName, image, email, assistiveDevice, dateOfBirth, disabilityType, education, gender, mobileNumber, institute, udid, skills
      });


    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
    }
  };

  const profileHandler = (event) => {
    const { name, value } = event.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const id = sessionStorage.getItem('id');
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/profile/updateprofile/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...profileData,
        }),
      });

      const data = await response.json();
      if (data.success) {
        // Handle success, e.g., show a success message or redirect
        toast.success("Profile updated successfully")
        navigate(0)
        window.scrollTo(0, 0);
        // console.log("Profile updated successfully");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Failed to update profile:", data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };







  const [dialog, setDialog] = useState(false);
  const [imgCrop, setImgCrop] = useState(false);
  const [storeImg, setStoreImg] = useState([]);

  const profileShow = storeImg.map(item => item.imgCrop);


  const onCrop = (view) => {
    setImgCrop(view)
  }

  const onClose = () => {
    setImgCrop(null)
  }

  const saveImage = async () => {

  }


  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  console.log(selectedFile);


  const handleImageUpload = async () => {
    if (!selectedFile) {
      toast.error("Select Image to Update")
    }

    if (selectedFile) {
      const formData = new FormData();
      formData.append('displayPicture', selectedFile);
      console.log(formData);


      try {
        const id = sessionStorage.getItem('id');

        const response = await axios.put(
          `${process.env.REACT_APP_SERVER_BASE_URL}/profile/updatedp/${id}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
            },
          }
        );

        if (response.status === 200) {
          const responseData = response.data;
          // navigate('/')
          toast.success("Image Updated Successfully")
          navigate(0);
          window.scrollTo(0, 0);
          // navigate(0)

          // Handle success (e.g., update your UI to display the new image)
        } else {
          // Handle error (e.g., show an error message)
          console.error('Error uploading image:', response.statusText);

        }
      } catch (error) {
        // Handle the network error
        console.error('Error uploading image:', error);
      }
    }
  }

  const handleBackToHome = (e) => {
    e.preventDefault();
    navigate('/')
    window.scrollTo(0, 0);
  }



  return (

    <div className='change88'>

      <form className='form88'>
        <div className='change-up88'>

          <div className='change-image88'>
            <img src={gmi} alt='Your profile image' />
          </div>


          <div className='change-head88'>
            <p>Change Profile Picture</p>
            <div className='change-btn88'>

              <buton className="chng88 chng188" onClick={handleImageUpload} >Change</buton>

              <input type="file" onChange={handleFileChange} style={{ color: "grey" }} />

            </div>
          </div>
        </div>

        <div className='change-down88'>

          <div className='form-left88'>

            <label htmlFor="fullname" style={{ color: "#F58840" }}>First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder='Enter your full name' onChange={profileHandler} value={profileData.firstName} />

            <label htmlFor="dateOfBirth" style={{ color: "#F58840" }}>Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" placeholder='dd/mm/yyyy' onChange={profileHandler} value={profileData.dateOfBirth} ></input>

            <label htmlFor="udid" style={{ color: "#F58840" }}>UDID</label>
            <input type="text" id="udid" name="udid" placeholder='Enter your UDID' onChange={profileHandler} value={profileData.udid} ></input>

            <label htmlFor="assistiveDevice" style={{ color: "#F58840" }}>Assistive Device</label>
            <select id="deassistiveDevice" name="assistiveDevice" value={profileData.assistiveDevice} onChange={profileHandler}  >
              <option value="wheel chairs">Wheel Chairs</option>
              <option value="tricycles">Tricycles</option>
              <option value="walking frames">Walking Frames</option>
              <option value="crutches">Crutches</option>
            </select>

            <label htmlFor="institution" style={{ color: "#F58840" }}>Name of Institution</label>
            <input type="text" id="institution" name="institute" placeholder='Your Institution Name' onChange={profileHandler} value={profileData.institute} />

            <label htmlFor="skills" style={{ color: "#F58840" }}>Skills</label>
            <input type="skills" id="skills" name="skills" placeholder='Enter your skills here. ' onChange={profileHandler} value={profileData.skills} />


          </div>

          <div className='form-right88'>
            <label htmlFor="fullname" style={{ color: "#F58840" }}>Last Name</label>
            <input type="text" id="fullname" name="lastName" placeholder='Enter your full name' onChange={profileHandler} value={profileData.lastName} />

            <label htmlFor="phone" style={{ color: "#F58840" }}>Mobile Number</label>
            <div className='mobilediv88'>
              <span className='telspan88'>+91</span>
              <input type="tel" id="phone" name="mobileNumber" onChange={profileHandler} value={profileData.mobileNumber} className='mobile88' ></input>
            </div>


            <label htmlFor="gender" style={{ color: "#F58840" }}>Gender</label>
            <input type="text" id="gender" name="gender" placeholder='Your gender' onChange={profileHandler} value={profileData.gender} />

            <label htmlFor="disability" style={{ color: "#F58840" }}>Disability</label>
            <select id="disability" name="disabilityType" value={profileData.disabilityType} onChange={profileHandler}>
              <option value="visual">Visual</option>
              <option value="hearing">Hearing</option>
              <option value="mobility">Mobility</option>
              <option value="cognitive">Cognitive</option>
              <option value="none">None</option>
            </select>

            <label htmlFor="education" style={{ color: "#F58840" }}>Highest Level of Education</label>
            <input type="text" id="education" name="education" placeholder='Your education' onChange={profileHandler} value={profileData.education} />

          </div>

        </div>

        <div className='save88'>
          <button className='save-btn88 save-btn188' onClick={handleBackToHome}>Back to Home</button>
          <button className='save-btn88 save-btn288' onClick={handleSubmit}>Save Changes</button>
        </div>
      </form>

    </div>
  );
}

export default Change;
