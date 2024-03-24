
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <Link to={"/"}> <li>Home</li></Link>
        <li>Shorts</li>
        <li>Recents</li>
        <li>Liked</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='font-bold pt-5'>Courses</h1>
      <ul>
        <li>List-1</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>News</li>
      </ul>

    </div>
  )
}

export default Sidebar