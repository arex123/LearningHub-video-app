
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  // if(!isMenuOpen) return null;
  return (
    <>
      {isMenuOpen &&

        <div className='p-5 min-h-[93vh] shadow-lg w-48'>
          <ul>
            <Link to={"/"}>
              <li className='p-1 rounded-sm hover:bg-slate-300 '>
                Home
              </li></Link>
            <li className='p-1 hover:bg-slate-300 hover:cursor-pointer'>Recents</li>
            <li className='p-1 hover:bg-slate-300 hover:cursor-pointer'>Liked</li>
            <li className='p-1 hover:bg-slate-300 hover:cursor-pointer'>Subscriptions</li>
          </ul>
          <h1 className='font-bold pt-2 p-1'>Courses</h1>
          <ul>
            <li className='p-1 hover:bg-slate-300 hover:cursor-pointer'>List-1</li>
          </ul>
          <h1 className='font-bold pt-2 p-1'>Explore</h1>
          <ul>
            <li className='p-1 hover:bg-slate-300 hover:cursor-pointer'>Trending</li>
            <li className='p-1 hover:bg-slate-300 hover:cursor-pointer'>Music</li>
            <li className='p-1 hover:bg-slate-300 hover:cursor-pointer'>Sport</li>
            <li className='p-1 hover:bg-slate-300 hover:cursor-pointer'>Gaming</li>
            <li className='p-1 hover:bg-slate-300 hover:cursor-pointer'>Movies</li>
            <li className='p-1 hover:bg-slate-300 hover:cursor-pointer'>News</li>
          </ul>

        </div>
      }
      {!isMenuOpen && <div>
        {/* <div className='p-5 shadow-lg w-14 h-full'> */}
        <div className='shadow-lg h-full p-3 opacity-75'>
          <ul>
            <Link to={"/"}> <>
              <span className="material-symbols-outlined text-[rgba(0,0,0,.7)] pb-2 text-3xl mb-2">
                home
              </span>
            </></Link>
            {/* <li>Shorts</li> */}
            <li><span className="material-symbols-outlined text-[rgba(0,0,0,.7)] pb-2 text-3xl mb-2">
              history
            </span></li>
            <li><span className="material-symbols-outlined text-[rgba(0,0,0,.7)] pb-2 text-3xl mb-2">
              thumb_up
            </span></li>
            <li><span className="material-symbols-outlined text-[rgba(0,0,0,.7)] pb-2 text-3xl mb-2">
              favorite
            </span></li>
          </ul>
        </div>
      </div>}

    </>
  )
}

export default Sidebar