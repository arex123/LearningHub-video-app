import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const list=[
//     {
//         courseName:"Data Mining Course",
//         videoTitle:"3: prerequisite",
//         image:"https://i.ytimg.com/vi/X3paOmcrTjQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh4u00MJ3vNDVzld99emp2Z-gL6w",

//     },
//     {
//         courseName:"Data Structure-Java",
//         videoTitle:"20: Trees",
//         image:"https://i.ytimg.com/vi/8hly31xKli0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFN0qRKwmeW1zC9ChzC-7CL7-ZaA"
//     },
//     {
//         courseName:"Computer programming",
//         videoTitle:"5: Hello World",
//         image:"https://i.ytimg.com/vi/QjMJsQx_O7o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqJgP5o08crC3dAm4lQONVOkSspg"
//     }
// ]
const Course = () => {
  let [currListName, setCurrListName] = useState("All Courses");
  let [list, setList] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:1231/mycourse");
      let data = await response.json();
      console.log("data: ", data);
      setList(data);
    })();
  }, []);

  const goToCourse=(item)=>{
    navigate("/learning?v="+item.link,{state:{data:item}})
  }
  return (
    <div className="w-full">
      <div className="p-10 bg-slate-600">
        <p className="text-5xl text-white font-bold opacity-8">My Learning</p>
      </div>
      <div>
        <div className="flex space-x-8 text-white bg-slate-600 font-bold pl-10 pb-2">
          <p
            onClick={() => setCurrListName("All Courses")}
            className={`cursor-pointer ${
              currListName == "All Courses"
                ? "underline decoration-8 underline-offset-8"
                : "no-underline"
            }`}
          >
            All Courses
          </p>
          <p
            onClick={() => setCurrListName("Wishlist")}
            className={`cursor-pointer ${
              currListName == "Wishlist"
                ? "underline decoration-8 underline-offset-8"
                : "no-underline"
            }`}
          >
            Wishlist
          </p>
          <p
            onClick={() => setCurrListName("Archived")}
            className={`cursor-pointer ${
              currListName == "Archived"
                ? "underline decoration-8 underline-offset-8"
                : "no-underline"
            }`}
          >
            Archived
          </p>
        </div>
        <div className="flex flex-wrap p-10 pt-0 mt-6">
          {list.map((item) => (
            <div key={item._id} onClick={()=>goToCourse(item)} className="w-72 m-3 border-2 group cursor-pointer">
              <div className="relative" style={{"fontVariationSettings": "'FILL' 1"}}>
                <img
                  className="group-hover:opacity-45 duration-100"
                  src={item.thumbnail}
                />
                <span className="hidden group-hover:block material-symbols-outlined text-[40px] p-2 fill-[1] bg-white rounded-full absolute  leading-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-100">play_arrow</span>
              </div>
              <div className="flex flex-col justify-evenly">
                <p className="text-gray-500 mb-2 font-bold text-sm m-2">{item.title}</p>
                {/* <p className="cursor-pointer">{item.videoTitle}</p> */}
                <progress
                  className="progress h-[2px] progress-primary w-56 m-2 mb-0"
                  value={item.completedStatus}
                  max="100"
                ></progress>
                <span className="text-sm ml-2 mb-2">{item.completedStatus}% progress</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
