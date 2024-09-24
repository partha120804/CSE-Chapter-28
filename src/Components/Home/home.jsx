import React from 'react'
import ChapterLogo from '../../assets/logo/chapterlogo.svg'
import image from '../../assets/Nature.jpg'
import Carousel from '../SwipeCarousel/SwipeCarousel';
import Slider from './ImageSlider/slider';
function home() {
  const slides=[image,image,image];
  return (
    <div >
        <div className='flex justify-center align-middle h-[50vh] w-[100vw]'>
            <img className='h-[45vh] w-[50vw]' src={ChapterLogo}/>
        </div>
        <div className='flex justify-center'>
             <Slider/>
        </div>
        
    </div>
    
  )
}

export default home