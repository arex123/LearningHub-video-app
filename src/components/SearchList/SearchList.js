import React, { useState, useEffect } from 'react'
import styles from "./searchList.module.css"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const searchResultList = [
  {
    username: "aditya",
    userpic: "https://yt3.ggpht.com/ytc/AIf8zZRr-XxwSuOW9kwN9wXTxhmT-I3A1dhcYKmiBz4h9g=s68-c-k-c0x00ffffff-no-rj",
    title: "Namaste guys, i am here",
    thumbnail: "https://i.ytimg.com/vi/Y6c2_52CsP8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApVVXrUme5aI8ydivBe_BTZVNYyA",
    views: "1234",
    how_old: "7 months old",
    description: "video is about something which is very easy to understand",
    length_of_video: "11:50",
    preview: "#",
  }
]

const SearchList = () => {
  const api_url = process.env.REACT_APP_YOUTUBE_VIDEO_SEARCH_LIST
  const api_key = process.env.REACT_APP_API_KEY
  const [searchResultList, setSearchVList] = useState([])
  const [searchText,setSearchText] = useState()
  const location = useLocation();



  useEffect(() => {
    console.log("location ",location);
    setSearchText(location.search.substring(14))
    getSearchResults()
  }, [])
 
  
  useEffect(()=>{
    setSearchText(location.search.substring(14))

  },[location])
  
  const getSearchResults = async () => {
    console.log("searchText ",searchText);
    const data = await fetch(api_url+location.search.substring(14)+"&key="+api_key)
    console.log("api_urlapi_key ",api_url+location.search.substring(14)+"&key="+api_key);
    const json = await data.json()
    setSearchVList(json.items)
  }

  return (
    <div className={styles.list_container}>
      {searchResultList?.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>

          <div className={styles.video_container}>
            <div className={styles.left_side}>
              <img src={video.snippet.thumbnails.high.url} />
            </div>
            <div className={styles.right_side}>
              <p className={styles.title}>{video.snippet.title}</p>
              {/* <span>
              <p>{video.views}</p>
              <p>{video.how_old}</p>
            </span>
            <span>
              <img src={video.userpic}/>
              <p>{video.username}</p>
            </span> */}
              <p>{video.snippet.description}</p>
            </div>
          </div>

        </Link>
      ))}


    </div>
  )
}

export default SearchList