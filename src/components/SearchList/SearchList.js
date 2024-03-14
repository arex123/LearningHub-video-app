import React from 'react'
import styles from "./searchList.module.css"
const searchResultList = [
  {
    username:"aditya",
    userpic:"https://yt3.ggpht.com/ytc/AIf8zZRr-XxwSuOW9kwN9wXTxhmT-I3A1dhcYKmiBz4h9g=s68-c-k-c0x00ffffff-no-rj",
    title:"Namaste guys, i am here",
    thumbnail:"https://i.ytimg.com/vi/Y6c2_52CsP8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApVVXrUme5aI8ydivBe_BTZVNYyA",
    views:"1234",
    how_old:"7 months old",
    description:"video is about something which is very easy to understand",
    length_of_video:"11:50",
    preview:"#",
  }
]

const SearchList = () => {
  return (
    <div className={styles.list_container}>

      <div className={styles.video_container}>
          <div className={styles.left_side}>
            <img src={searchResultList[0].thumbnail}/>
          </div>
          <div className={styles.right_side}>
            <p className={styles.title}>{searchResultList[0].title}</p>
            <span>
              <p>{searchResultList[0].views}</p>
              <p>{searchResultList[0].how_old}</p>
            </span>
            <span>
              <img src={searchResultList[0].userpic}/>
              <p>{searchResultList[0].username}</p>
            </span>
            <p>{searchResultList[0].description}</p>
          </div>
      </div>
      
    </div>
  )
}

export default SearchList