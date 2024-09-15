import React from 'react'
import image from '../../assets/default.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Batches() {
  return (
    <div className='flex flex-wrap justify-center'>
      
      <div className="pcard m-4 h-[400px] w-[275px] backdrop-blur-md  duration-500 border-2 rounded-xl border-[#E1E1E1] border-opacity-30 flex justify-around items-center flex-col text-[#ffffff] 
      backdrop-blur-md backdrop-brightness-[85%] hover:backdrop-brightness-[60%] transition-backdrop-brightness duration-500 
      hover:scale-[1.02] transform transition duration-300 ease-in-out
      ">
        <div className='relative mt-3 rounded-full h-[195px] w-[195px]'>
          <img className='h-[195px] w-[195px] rounded-full border-4 ' src={image}/>
          <div className="absolute  top-0 left-0 w-12 h-12 bg-[#fffff] rounded-full">
            {/* <p className=" my-2.5 mx-2.5 text-xl">067</p> */}
          </div>
        </div>
        <div className='flex items-center flex-col'>
        <p className=' text-3xl'>Krishna Kalra</p>
        <p className=' text-[1.125rem]'>B123083</p>
        </div>
        <div className='flex w-[200px] justify-around '>
          <FontAwesomeIcon className="size-7 hover:shadow-lg hover:shadow-green-500/50 hover:scale-110 transform transition duration-300 ease-in-out" icon={faInstagram} />
          <FontAwesomeIcon className="size-7 hover:shadow-lg hover:shadow-green-500/50 hover:scale-110 transform transition duration-300 ease-in-out" icon={faGithub} />
          <FontAwesomeIcon className="size-7 hover:shadow-lg hover:shadow-green-500/50 hover:scale-110 transform transition duration-300 ease-in-out" icon={faLinkedin} />
        </div>
      </div>
      

     </div>
  )
}

export default Batches