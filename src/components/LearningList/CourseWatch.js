import React, { useState } from 'react'
import SideList from './SideList.js'

const CourseWatch = () => {
  let [currSec, setCurrSec] = useState("Description")

  
  return (
    <div className='w-full flex'>
      <div className='bg-slate-600 w-[70%]'>
        <iframe className='h-[60%] w-[100%]' src={"https://www.youtube.com/embed/A6XUVjK9W4o"} title="Youtube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <div>
          <p className='m-3'>Length of Last Word | 2 Ways | Leetcode 58 | Amazon | codestorywithMIK</p>
          <span className='flex m-3'>
            <p onClick={() => setCurrSec("Description")} className={`cursor-pointer ${currSec == "Description" ? 'underline decoration-4 underline-offset-8' : 'no-underline'}`}>Description</p>
            <p onClick={() => setCurrSec("Comments")} className={`pl-5 cursor-pointer ${currSec == "Comments" ? 'underline decoration-4 underline-offset-8' : 'no-underline'}`}>Comments</p>
            <p onClick={() => setCurrSec("Notes")} className={`pl-5 cursor-pointer ${currSec == "Notes" ? 'underline decoration-4 underline-offset-8' : 'no-underline'}`}>Notes</p>
          </span>
        </div>

      </div>
      <div className='w-[30%]'>
        <SideList/>
      </div>
       
    </div>
  )
}

export default CourseWatch