import React, { useEffect, useState, useCallback } from "react";
import SideList from "./SideList.js";
import { useLocation } from "react-router-dom";
import { Tabs } from "antd";

const CourseWatch = (props) => {
  const { state } = useLocation();
  const [data, setData] = useState(null);

  const [currVideo,setCurrVideo] = useState()

  useEffect(() => {
    (async () => {
    
      let response = await fetch("http://localhost:1231/mycourse/"+state.data._id)
      let json = await response.json()
      console.log("json" ,json)
      setData(json);
      setCurrVideo(json.items[0])
    })();

    const sideLisstItem = document.querySelector("#sideListId");

    const navbarObserving = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        sideLisstItem.style.position = "initial";
        sideLisstItem.style.right = 0;
      } else {
        sideLisstItem.style.position = "fixed";
        sideLisstItem.style.top = 0;
        sideLisstItem.style.right = 0;
      }
    });

    navbarObserving.observe(document.querySelector("#headerId"));
  }, []);

console.log("data ",data)
  const items = [
    {
      key: "1",
      label: "Description",
      children: <html>{currVideo?.snippet?.description}</html>,
    },
    {
      key: "2",
      label: "Notes",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Comments",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div className="w-full flex">
      <div className="w-[80%]">
        {data && (
          <>
            <iframe
              width="100%"
              height="50%"
              src={
                "https://www.youtube.com/embed/" +
                currVideo?.snippet?.resourceId?.videoId
              }
              title="Youtube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div>
              <p className="m-3">{currVideo?.snippet?.title}</p>
              <Tabs className="m-3" defaultActiveKey="1" items={items} />
            </div>
          </>
        )}
      </div>
      <div id="sideListId" className="w-[19%]">
        <SideList videoList={data?.items} setCurrVideo={setCurrVideo} status={data?.completedStatus}/>
      </div>
    </div>
  );
};

export default CourseWatch;
