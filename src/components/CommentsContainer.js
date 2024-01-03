import React from 'react'
import CommentList from './CommentList'

const commentsData = [
    {
        name:"aditya",
        comment:"lorem esnvd hs onjesnvd hs onjesnvd hs onjesnvd hs onj",
        replies:[
            {
                name:"ayush",
                comment:"lorem esnvd hs onjesnvd hs onjesnvd hs onjesnvd hs onj",
                replies:[
                    {
                        name:"aditya",
                        comment:"lorem esnvd hs onjesnvd hs onjesnvd hs onjesnvd hs onj",
                        replies:[
                            {
                                name:"aditya",
                                comment:"lorem esnvd hs onjesnvd hs onjesnvd hs onjesnvd hs onj",
                                replies:[
                                    {
                                        name:"aditya",
                                        comment:"lorem esnvd hs onjesnvd hs onjesnvd hs onjesnvd hs onj",
                                        replies:[
                                            
                                        ]
                                    }       
                                ]
                            }  ,
                            {
                                name:"aditya",
                                comment:"lorem esnvd hs onjesnvd hs onjesnvd hs onjesnvd hs onj",
                                replies:[
                                    
                                ]
                            }     
                        ]
                    }
                    
                ]
            }
        ]
    },
    {
        name:"aditya",
        comment:"lorem esnvd hs onjesnvd hs onjesnvd hs onjesnvd hs onj",
        replies:[
            {
                name:"idi",
                comment:"lorem esnvd hs onjesnvd hs onjesnvd hs onjesnvd hs onj",
                replies:[
                    
                ]
            },
        ]
    },
    {
        name:"aditya",
        comment:"lorem esnvd hs onjesnvd hs onjesnvd hs onjesnvd hs onj",
        replies:[
            
        ]
    },
    {
        name:"aditya",
        comment:"lorem esnvd hs onjesnvd hs onjesnvd hs onjesnvd hs onj",
        replies:[
            
        ]
    }

]

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer