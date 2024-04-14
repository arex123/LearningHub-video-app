import React from 'react'

const SideList = () => {
    let percentage = 5
    let videoList = [
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: true,
            length: "22min",
            key: 7
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: true,
            length: "22min",
            key: 8
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 9
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 10
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 11
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 12
        }, {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: true,
            length: "22min",
            key: 8
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 9
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 10
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 11
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 12
        }, {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: true,
            length: "22min",
            key: 8
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 9
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 10
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 11
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 12
        }, {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: true,
            length: "22min",
            key: 8
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 9
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 10
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 11
        },
        {
            link: "https://www.youtube.com/embed/A6XUVjK9W4o",
            title: "video",
            completed: false,
            length: "22min",
            key: 12
        }

    ]
    return (
        <div className=''>
            <div className='bg-slate-300 p-4 flex justify-between font-bold'><span>Course content</span><span>{percentage + "%"}</span>
            </div>
            <div className='h-[90vh] overflow-scroll'>
                {videoList.map((video,index) => 
                    <div key={(video.key+index)} className='p-2 flex items-center bg-red-300 hover:bg-slate-500 hover:cursor-pointer'>
                        <input type="checkbox" defaultChecked className="checkbox " />
                        <div className='text-[.9rem] ml-5'>
                            <p>{video.title + " "+(index+1)}</p>
                            <p>{video.length}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SideList