import React, { useState } from 'react'

const list=[
    {
        courseName:"Data Mining Course",
        videoTitle:"3: prerequisite",
        image:"https://i.ytimg.com/vi/X3paOmcrTjQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh4u00MJ3vNDVzld99emp2Z-gL6w",
        
    },
    {
        courseName:"Data Structure-Java",
        videoTitle:"20: Trees",
        image:"https://i.ytimg.com/vi/8hly31xKli0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFN0qRKwmeW1zC9ChzC-7CL7-ZaA"
    },
    {
        courseName:"Computer programming",
        videoTitle:"5: Hello World",
        image:"https://i.ytimg.com/vi/QjMJsQx_O7o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqJgP5o08crC3dAm4lQONVOkSspg"
    }
]
const Course = () => {
    let [currListName,setCurrListName] = useState("All Courses")
  return (
    <div className='w-full'>
        <div className='p-10 bg-slate-600'>
            <p className='text-5xl text-white font-bold opacity-8'>My Learning</p>
        </div>
        <div>
            <div className='flex space-x-8 text-white bg-slate-600 font-bold pl-10 pb-2'>
                <p onClick={()=>setCurrListName("All Courses")} className={`cursor-pointer ${currListName=="All Courses"?'underline decoration-8 underline-offset-8':'no-underline'}`}>All Courses</p>
                <p onClick={()=>setCurrListName("Wishlist")} className={`cursor-pointer ${currListName=="Wishlist"?'underline decoration-8 underline-offset-8':'no-underline'}`}>Wishlist</p>
                <p onClick={()=>setCurrListName("Archived")} className={`cursor-pointer ${currListName=="Archived"?'underline decoration-8 underline-offset-8':'no-underline'}`}>Archived</p>
            </div>
        <div class="flex flex-wrap p-10 pt-0 mt-6">
                {list.map((item)=><div class="m-3 border-2">
                    <img class="w-56 cursor-pointer" src={item.image}/>
                    <div class="flex flex-col ">
                        <p className="text-gray-500 mb-2">{item.courseName}</p>
                        <p className="cursor-pointer">{item.videoTitle}</p>
                        </div>
                    
                    </div>)}

            </div>
        </div>
    </div>
  )
}

export default Course