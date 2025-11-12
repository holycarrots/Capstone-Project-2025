import React, { useState } from 'react'
import { datagjobs } from './Govtjob'
// import Gjob from './Gjob'
import './Goverment.css'
import Govcard from './Govcard';
export default function Goverment() {
    const[val,setVal] = useState(datagjobs);
    const [tag, setTag] = useState('');
    const [loading, setLoading] = useState(false);
    const [he, setHe] = useState(false);
    function handleChange(event) {
        setTag(event.target.value);
    }
  return (
    <div>
      <div className='gsection21'>
                {/* <form className='form21' onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder='Search by Jobs or Skills' onChange={handleChange} value={tag} id="tag" />
                    <button type="submit"  className='jobsecbutton21'>Search</button>

                </form> */}
               

                {/* {loading && <Spinner />
                } */}
                <div className='gpvtjobs21'>
                <p>Goverment Jobs</p>
                </div>
                <div className='gcol21'>

                        {val.map((post)=>{
                            return <Govcard title={post.job_title} desc={post.job_description} minsal={post.job_min_salary} company={post.employer_name} maxsal={post.job_max_salary} place={post.job_city} post={post} key={post.job_id} publish={post.job_publisher} type={post.job_employment_type} jlink={post.job_apply_link}/>
                        })}
                    

                    {/* <p style={{ color: "#FDFDFD", fontSize: "1px" }}>(value.trim().length !== 0 && he == false)?</p>

                    {job.map((post) => {
                        return <Jobcard title={post.job_title} desc={post.job_description} minsal={post.job_min_salary} company={post.employer_name} maxsal={post.job_max_salary} place={post.job_city} post={post} key={post.job_id} publish={post.job_publisher} type={post.job_employment_type} jlink={post.job_apply_link} />
                    })}

                    :

                    {job.map((post) => {
                        return <Jobsearch title={post.job_title} desc={post.job_description} minsal={post.job_min_salary} company={post.employer_name} maxsal={post.job_max_salary} place={post.job_city} post={post} key={post.job_id} publish={post.job_publisher} type={post.job_employment_type} jlink={post.job_apply_link} />
                    })} */}
                </div>

                {/* <Jobcard/> */}
            </div>
        </div>
        
    )
}
