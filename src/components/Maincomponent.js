import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './Videocontainer'
import FrontCard from './FrontCard'

const MainComponent = () => {
  return (
    <div className='col-span-11'>
      {/* <FrontCard/> */}
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainComponent