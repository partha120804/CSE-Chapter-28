import React from 'react'
import ChapterLogo from '../../assets/logo/chapterlogo.svg'
import image from '../../assets/Nature.jpg'
import Carousel from '../SwipeCarousel/SwipeCarousel';
import Slider from './ImageSlider/slider';
function home() {
  const slides=[image,image,image];
  return (
    <div>
        <div className='flex justify-center align-middle h-[80vh] w-[100vw]'>
            <img className='h-[45vh] w-[50vw]' src={ChapterLogo}/>
        </div>
        <div class="text-[#d0f0ea] ml-[10%] mr-[10%] flex flex-col items-center justify-center gap-5 text-justify">
          <h1 class="text-[6rem]">Welcome</h1>
          <h2 class="text-4xl">A hearty welcome to the CSE chapter '28...</h2>
          <p class="text-3xl">
            This bootcamp is designed to spark your excitement and curiosity about knowing your seniors and about the college life which offers a vibrant, interactive glimpse into what awaits you. This highlights the exciting side of college life, featuring fun events, college fests, inspiring student stories, and opportunities. Our team has poured their hearts into making this website to give you a genuine glimpse into college life and help you feel excited about your future here. We hope you enjoy exploring it as much as we enjoyed making it for you!!!
          </p>
        </div>
             
        <div className='flex justify-center'>
             <Slider/>
        </div>
    </div>
    
  )
}

export default home