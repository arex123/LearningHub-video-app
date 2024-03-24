import React from 'react'
import Button from './Button'

const tags = ["All","Sports","Anime","Movies","Kapil sharma","live","Cartoon","dragon ball","opm"]
const ButtonList = () => {
  return (
    <div className='flex p-2'>
      {tags.map((item)=><Button key={item} name={item} />)}
    </div>
  )
}

export default ButtonList