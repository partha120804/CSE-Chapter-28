import React from 'react'
import image from '../../assets/default.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
function Batches() {
  return (
    <div className='flex flex-wrap justify-center'>
      <div className="pcard m-4 h-[400px] w-[275px] backdrop-blur-md backdrop-brightness-[85%] hover:backdrop-brightness-[60%] transition-backdrop-brightness duration-500 border-2 rounded-xl border-[#E1E1E1] border-opacity-30 flex justify-around items-center flex-col text-[#002020] hover:text-[#ffffff]">
        <div className='mt-3 rounded-full h-[195px] w-[195px]'>
          <img className='h-[195px] w-[195px] rounded-full' src={image}/>
        </div>
        <div className='flex items-center flex-col'>
        <p className=' text-3xl'>Krishna Kalra</p>
        <p className=' text-2xl'>B123067</p>
        </div>
        <div className='flex w-[200px] justify-around'>
          <FontAwesomeIcon className="size-7" icon={faInstagram} />
          <FontAwesomeIcon className="size-7" icon={faGithub} />
          <FontAwesomeIcon className="size-7" icon={faLinkedin} />
          <FontAwesomeIcon className="size-7" icon={faEnvelope} />
        </div>
      </div>
    </div>
  )
}

export default Batches