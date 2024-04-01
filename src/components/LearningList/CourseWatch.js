import React, { useState } from 'react'

const CourseWatch = () => {
    let [currSec,setCurrSec]=useState("Description")
  return (
    <div>
        <div className=''>
        <iframe width="714" height="514" src={"https://www.youtube.com/embed/A6XUVjK9W4o"} title="Youtube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <div>
            <p>Length of Last Word | 2 Ways | Leetcode 58 | Amazon | codestorywithMIK</p>
            <span className='flex'>
                <p onClick={()=>setCurrSec("Description")} className={`cursor-pointer ${currSec=="Description"?'underline decoration-8 underline-offset-8':'no-underline'}`}>Description</p>
                <p onClick={()=>setCurrSec("Comments")} className={`pl-5 cursor-pointer ${currSec=="Comments"?'underline decoration-8 underline-offset-8':'no-underline'}`}>Comments</p>
                <p onClick={()=>setCurrSec("Notes")} className={`pl-5 cursor-pointer ${currSec=="Notes"?'underline decoration-8 underline-offset-8':'no-underline'}`}>Notes</p>
            </span>
        </div>

        </div>
        <div></div>
    </div>
  )
}

export default CourseWatch