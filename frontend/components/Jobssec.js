import React, { useState, useEffect } from 'react'
import './Jobssec.css';
import Jobcard from './Jobcard';
import axios from 'axios';
import Spinner from './Spinner';
// import {ThreeDots} from 'react-loader-spinner';
// import Jobsearch from './Jobsearch';
// import jobapi from './Info.js';
import Jobsearch from './Jobsearch';
export default function Jobssec() {
    const [job, setJob] = useState([]);
    const [tag, setTag] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const url = 'https://jsearch.p.rapidapi.com/search?query=Jobs%20for%20disable&num_pages=20&remote_jobs_only=false';
            const options = {
                method: 'GET',
                headers: {

                    'X-RapidAPI-Key': 'f42081d41cmsh4a7de2f9b7dffd6p1cc97bjsn527144286d3a',

                    

                    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
                }
            };
            setLoading(true);
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.data);
            setJob(result.data);
            setLoading(false);
        })();

    }, []);

    async function fetchData() {
        let query;
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {
                query: `${tag} + job`,
                num_pages: '20'
            },
            headers: {
                'X-RapidAPI-Key': 'f42081d41cmsh4a7de2f9b7dffd6p1cc97bjsn527144286d3a',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            }
        };
        setLoading(true);
        const response = await axios.request(options);
        console.log(response.data.data);
        console.log(query);
        setJob(response.data.data);
        setLoading(false);
        // setTag(response.data.data);
    }




    function handleChange(event) {
        setTag(event.target.value);
    }
    function clickHandler() {
        fetchData();
    }
    // function clickHandler() {
    //     useEffect(() => {
    //         fetchData();
    //     }, [setTag]);
    // }

    return (
        <div>
            <div className='section21'>
                <div className='govjobs21'>
                <p>Private Jobs</p>
                </div>
                <form className='form21' onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder='Search by Jobs or Skills' onChange={handleChange} value={tag} id="tag" />
                    <button type="submit" onClick={clickHandler} className='jobsecbutton21'>Search</button>
                </form>

                {loading && <Spinner/>
                }
                <div className='col21'>

                    <p style={{ color: "#FDFDFD", fontSize: "1px" }}>(value.trim().length !== 0)?</p>


                    {job.map((post) => {
                        return <Jobcard title={post.job_title} desc={post.job_description} minsal={post.job_min_salary} company={post.employer_name} maxsal={post.job_max_salary} place={post.job_city} post={post} key={post.job_id} publish={post.job_publisher} type={post.job_employment_type} jlink={post.job_apply_link}/>
                    })}

                    :

                    {job.map((post) => {
                        return <Jobsearch title={post.job_title} desc={post.job_description} minsal={post.job_min_salary} company={post.employer_name} maxsal={post.job_max_salary} place={post.job_city} post={post} key={post.job_id}  publish={post.job_publisher} type={post.job_employment_type} jlink={post.job_apply_link}/>
                    })}

                </div>
                {/* <Jobcard/> */}
            </div>

        </div>


    )
}

// {
//     jobapi.map((post) =>
//     (<Jobcard title ={post.title} key={post.key} desc={post.desc} minsal={post.minsal} company={post.company} maxsal={post.maxsal} place={post.place}/>)

// )}
//  <Jobcard title ={post.job_title} key={post.index} desc={post.job_description} minsal={post.job_min_salary} company={post.employer_name} maxsal={post.job_max_salary} place={post.job_city}/> 
