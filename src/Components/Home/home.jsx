import React from 'react'
import  "./home.css"
import ChapterLogo from '../../assets/logo/chapterlogo.svg'
import welcome from '../../assets/logo/Welcome.svg'
import image from '../../assets/Nature.jpg'
import Carousel from '../SwipeCarousel/SwipeCarousel';
import Slider from './ImageSlider/slider';
function home() {
  const slides=[image,image,image];
  return (
    <div>
        <div className='flex justify-center items-center h-[100vh] w-[100vw]'>
            <img className='mb-[20%] h-[50vh] w-[80vw]' src={ChapterLogo}/>
        </div>
        <div class="text-[#d0f0ea] ml-[10%] mr-[10%] flex flex-col items-center justify-center gap-5 text-justify">
        <div className='flex justify-center items-baseline'>
        <img className=' mt-4 h-[20vh] w-[70vw]' src={welcome}/>
        </div>
          <h2 class="text-3xl text-center solwa stroke font-semibold">A hearty welcome to the CSE chapter '28...</h2>
          <p class="text-2xl font-semibold solway">
            This bootcamp is designed to spark your excitement and curiosity about knowing your seniors and about the college life which offers a vibrant, interactive glimpse into what awaits you. This highlights the exciting side of college life, featuring fun events, college fests, inspiring student stories, and opportunities. Our team has poured their hearts into making this website to give you a genuine glimpse into college life and help you feel excited about your future here. We hope you enjoy exploring it as much as we enjoyed making it for you!!!
            This is a changed text
          </p>
        </div>
             
        <div className='flex justify-center'>
             <Slider/>
        </div>
    </div>
    
  )
}

export default home