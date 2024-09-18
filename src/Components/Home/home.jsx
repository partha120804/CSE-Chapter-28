import React from 'react'
import ChapterLogo from '../../assets/logo/chapterlogo.svg'
import { SwipeCarousel } from '../SwipeCarousel/SwipeCarousel'
function home() {
  return (
    <div>
        <div className='flex justify-center align-middle h-[80vh] w-[100vw]'>
            <img className='h-[45vh] w-[50vw]' src={ChapterLogo}/>
        </div>
        <div className='max-w-[100vw]'>
        <SwipeCarousel/>
        </div>
    </div>
    
  )
}

export default home