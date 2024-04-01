
import { Navigate, useNavigate } from "react-router-dom"

const list=[
    {
        courseName:"Data Mining Course",
        videoTitle:"3: prerequisite",
        image:"https://i.ytimg.com/vi/X3paOmcrTjQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh4u00MJ3vNDVzld99emp2Z-gL6w"
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

const FrontCard = () =>{
    const navigate = useNavigate()
    let MyLearningClicked = ()=>{   
        navigate("/courses")
    }
    return (
        <div class="border-0 m-5">
            <div class="w-[100%] flex justify-between">
            <h1 class="text-2xl font-bold">Lets Start Learning, Aditya</h1>
            <p onClick={()=>MyLearningClicked()} class="text-purple-700 font-bold underline underline-offset-4 cursor-pointer">My Learning</p>
            </div>
            <div class="flex space-x-5 justify-center mt-6">
                {list.map((item)=><div class="flex border-2">
                    <img class="w-56 cursor-pointer" src={item.image}/>
                    <div class="p-2 flex flex-col ">
                        <p className="text-gray-500 mb-2">{item.courseName}</p>
                        <p className="cursor-pointer">{item.videoTitle}</p>
                        </div>
                    
                    </div>)}

            </div>
        </div>
    )
}

export default FrontCard