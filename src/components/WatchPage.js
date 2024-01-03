import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

const WatchPage = () => {

    const [searchParam] = useSearchParams();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className='flex flex-col'>
        <div className='px-5'>
            <iframe width="914" height="514" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="Youtube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <CommentsContainer/>
        </div>
    )
}

export default WatchPage