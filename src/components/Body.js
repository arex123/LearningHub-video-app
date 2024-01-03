import React from 'react'
import Sidebar from './Sidebar'
import MainComponent from './Maincomponent'
import { Outlet } from 'react-router-dom'


const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        {/* <MainComponent/> */}
        <Outlet/>
    </div>
  )
}

export default Body