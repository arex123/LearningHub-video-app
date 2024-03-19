import React from 'react'

const detail = {
    pic: "https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
    bgpic: "https://yt3.googleusercontent.com/_c0WjgBOeg53X4N5MR9slH4C-D_3BMqPMybetcW67vROcNTNCU0LLOD_fZFbdn4HLhgA2WTz5A=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    name: "Sheryians Coding School",
    subs: "297K",
    videos: "324",
    des: "The Sheryians Coding School is a step towards helping our Indian audience to learn modern design and coding practices.",
    links: ["www.example.com", "www.example.com", "www.example.com", "www.example.com"],
}

const ChannelProfile = () => {
    return (
        <div class='m-2 w-[100%]'>
            <div class="flex flex-col">
                <div class="bg-slate-500  w-[100%] h-52">
                    <img class="object-cover w-[100%] h-[100%]" src={detail.bgpic} />
                </div>
                <div class="w-[100%] flex items-center p-10 h-56">
                    <div><img class="rounded-full" src={detail.pic} /></div>
                    <div class="ml-10">
                        <h2 class="text-4xl font-bold">{detail.name}</h2>
                        <div class="text-gray-500 leading-6 font-medium text-[12px]"><p>{detail.subs} Subscriber</p><p>{detail.videos} videos</p></div>
                        <p class="text-gray-500 font-bold leading-6 text-[12px]"> <span class="text-blue-700"> {detail.links[0]}</span> and {detail.links.length - 1} more links</p>
                        <button class="bg-black text-white text-[14px] my-2 font-bold p-2 rounded-3xl">Subscribe</button>
                    </div>
                </div>
                <div class="p-2 px-16 border-b-2">
                    <ul class="flex space-x-7 text-gray-500	 font-bold">
                        <li class="cursor-pointer">Home</li>
                        <li class="cursor-pointer">Videos</li>
                        <li class="cursor-pointer">Playlist</li>
                        <li class="cursor-pointer">Community</li>
                    </ul>
                </div>
                <div></div>
            </div>

        </div>
    )
}

export default ChannelProfile