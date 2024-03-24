import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { cacheResults } from '../utils/searchSlice'
import { Link, useNavigate } from 'react-router-dom'

const Head = () => {
  const YOUTUBE_SEARCH_API = process.env.REACT_APP_YOUTUBE_SEARCH_API
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)

  const searchCache = useSelector(state => state.search)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSuggestionsforSearchQuery()
      }
    }
      , 200)

    return () => {
      clearTimeout(timer)
    }

  }, [searchQuery])

  const getSuggestionsforSearchQuery = async () => {

    fetch(YOUTUBE_SEARCH_API + searchQuery)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setSuggestions(data[1])
        dispatch(cacheResults({
          [searchQuery]: data[1]
        }))
      })
      .catch(error => console.error(error));
  }

  const suggestionClicked = (text)=>{
    setSearchQuery(text)
  }
  const navigateToSearch = ()=>{
    navigate(`/results?search_query=${searchQuery.trim().split(" ").join("+")}`)
  }

  return (
    <div className="grid grid-flow-col p-1 m-1 shadow-lg items-center">
      <div className="flex col-span-1 items-center">
        <img alt="hamburger" onClick={() => handleToggleMenu()} className="h-8 cursor-pointer" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" />
        <a href='/'>
          <img alt="Youtube logo" className="h-12 mx-2" src="data:image/png;base64,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" />
        </a>
      </div>

      <div className="col-span-10 relative">
        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestion(true)} onBlur={() => setTimeout(()=>setShowSuggestion(false),100) } className="w-1/2  p-1.5 rounded-lg rounded-r-none border border-gray-400 border-r-0" type="text" />

        {/* <Link to={`/results?search_query=${searchQuery.trim().split(" ").join("+")}`}> */}
          <button onClick={()=>navigateToSearch()} className='bg-gray-300 rounded-lg rounded-l-none p-2'>search</button>
        {/* </Link> */}


        {(showSuggestion && suggestions.length != 0) &&
          <div className='absolute m-1 border-2 rounded bg-white w-1/2'>
            {suggestions &&
              suggestions.map((suggestion) => <div key={suggestion} onClick={()=>suggestionClicked(suggestion)} className='m-1 cursor-pointer hover:bg-gray-200'>
                {suggestion}
              </div>)
            }
          </div>
        }

      </div>

      <div className="col-span-1">
        <img alt="User" className="h-8" src="data:image/png;base64,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" />
      </div>
    </div>
  )
}

export default Head