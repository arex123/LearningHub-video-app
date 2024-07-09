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

/*
Todo:

1: make tag buttonList working
2: change google icons to ant.design icons
3: when course is empty add no course design
4: inside course list add remove course button
5: add more in courselist section for changing to a filter section
6: add skeleton to maincontainer and courses list and searchlist

for adding or removing or viewing course you need to sign in first 

*/