import React from "react";

const SideList = () => {
  let percentage = 5;
  let videoList = [
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 7,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: true,
      length: "22min",
      key: 8,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 9,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 10,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 11,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 12,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 8,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 9,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 10,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 11,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 12,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 8,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 9,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 10,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 11,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 12,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 8,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 9,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 10,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 11,
    },
    {
      link: "https://www.youtube.com/embed/A6XUVjK9W4o",
      title: "video",
      completed: false,
      length: "22min",
      key: 12,
    },
  ];
  return (
    <div className="">
      <div className="bg-slate-300 p-4 flex justify-between font-bold">
        <span>Course content</span>
        <span>{percentage + "%"}</span>
      </div>
      <div className="max-h-[90vh] overflow-scroll">
        {videoList.map((video, index) => (
          <div
            key={video.key + index}
            className="p-2 flex items-start hover:bg-slate-300 hover:cursor-pointer"
          >
            <input
              type="checkbox"
              defaultChecked={video.completed}
              className="checkbox border-1 border-black size-4 rounded-none m-2"
            />
            <div className="text-[1rem] ml-5">
              <p className="m-0">{video.title + " " + (index + 1)}</p>
              <span className="flex item-center text-xs">
                <span class="material-symbols-outlined text-xl">smart_display</span>
                <span className="ml-1 p-0 my-auto">{video.length}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideList;
