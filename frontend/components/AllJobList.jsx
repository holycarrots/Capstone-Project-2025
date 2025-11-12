//lagche na (not in use)

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostButton from './PostButton';
import Pagination from './Pagination';
export default function AllJobList() {

  const [jobs, setJobs] = useState([]);

    //pagination

    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(4);


  let jobing = [];




  useEffect(() => {
    const fetchAllJob = async () => {
      const allJob = await axios.get(`http://localhost:5000/api/v1/pvtjob`);
      jobing = allJob.data;
      const data1 = jobing.pvtjobs.reverse();
      setJobs(data1);
    }
    fetchAllJob();
  }, []);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = jobs.slice(firstPostIndex,lastPostIndex);

  return (
    <>
      
       <div>
        <PostButton jobs={currentPosts}/>
        <Pagination totalPosts={jobs.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
       </div>
    </>
  )
}