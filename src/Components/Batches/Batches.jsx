import React from 'react'
import image from '../../assets/default.jpg';
import insta from '../../assets/instagram-square.svg';
import github from '../../assets/github-square.svg';
import linkedin from '../../assets/linkedin.svg';
function Batches() {
  return (
    <div>
      <div className="pcard m-4 h-[400px] w-[275px] backdrop-blur-md border-2 rounded border-[#E1E1E1] border-opacity-30 flex justify-around items-center flex-col">
        <div className='mt-3 rounded-full h-[225px] w-[225px]'>
          <img className='h-[225px] w-[225px] rounded-full' src={image}/>
        </div>
        <div className='flex items-center flex-col'>
        <p className=' text-3xl'>Krishna Kalra</p>
        <p className=' text-2xl'>B123067</p>
        </div>
        <div className='flex w-[275px] justify-around'>
          <img className='size-10' src={insta}/>
          <img className='size-10' src={github}/>
          <img className='size-10' src={linkedin}/>
        </div>
      </div>
    </div>
  )
}

export default Batches