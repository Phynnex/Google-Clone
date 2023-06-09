import React from 'react'
import {FcSearch} from "react-icons/fc"
import {BsNewspaper, BsImages} from "react-icons/bs"



const Links = () => {
  return (
    <div className='flex'>
        <a href="/" ><FcSearch />All</a>
        <a href="/"><BsNewspaper />News</a>
        <a href="/"><BsImages />Images</a>
        <a href="/">Videos</a>
        <a href="/">Maps</a>
    </div>
  )
}

export default Links