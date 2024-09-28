import React from 'react'
import  "./home.css"
import ChapterLogo from '../../assets/logo/chapterlogo.svg'
import welcome from '../../assets/logo/Welcome.svg'
import image from '../../assets/Nature.jpg'
import Carousel from '../SwipeCarousel/SwipeCarousel';
import Slider from './ImageSlider/slider';
import { Typewriter} from 'react-simple-typewriter';
function home() {
  const slides=[image,image,image];
  return (
    <div>
        <div className=' mt-[5vh] lg:mt-5 flex justify-center items-center h-[30vh] lg:h-[100vh] w-[100vw]'>
            <img className='lg:mb-[20%] h-[25vh] lg:h-[50vh] w-[80vw]' src={ChapterLogo}/>
        </div>
        <div class="text-[#d0f0ea] ml-[10%] mr-[10%] flex flex-col items-center justify-center gap-5 text-justify">
        <div className='flex justify-center items-baseline'>
        <img className=' mt-4 h-[5vh] lg:h-[20vh] w-[85vw] lg:w-[55vw]' src={welcome}/>
        </div>
          <h2 class="text-center text-3xl sofia stroke font-semibold lg:text-5xl">
          <Typewriter
          words={['A HEARTY WELCOME TO THE CSE CHAPTER \'28']}
          loop={1}
          typeSpeed={90}
          deleteSpeed={30}
          delaySpeed={5000}
          />
          </h2>
          <p class=" text-lg solway lg:text-3xl">
            <Typewriter
            words={['This bootcamp is designed to spark your excitement and curiosity about knowing your seniors and about the college life which offers a vibrant, interactive glimpse into what awaits you. This highlights the exciting side of college life, featuring fun events, college fests, inspiring student stories, and opportunities.']}
            // ,'Our team has poured their hearts into making this website to give you a genuine glimpse into college life and help you feel excited about your future here. We hope you enjoy exploring it as much as we enjoyed making it for you!!!'

            loop={1000}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={6000}
            />
          </p>
        </div>
             
        <div className='mb-[8vh] flex justify-center'>
             <Slider/>
        </div>
    </div>
    
  )
}

export default home