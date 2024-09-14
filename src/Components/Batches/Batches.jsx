import React from 'react'
import {useState} from 'react'
import image from '../../assets/default.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin,faEnvelope} from '@fortawesome/free-brands-svg-icons';
function Batches() {
  const [pop, popState] = useState("hidden");
  return (
    <div className="flex flex-wrap justify-center">
      <div
        className={`absolute z-10 onClickPopUp w-[60%] min-h-[80%] backdrop-blur-md border-4 border-opacity-30 rounded-xl border-[#E1E1E1] flex flex-row align-center ${pop} items-center`}
      >
        <div className="flex flex-col  w-[40%] h-[95%]  my-3 ">
          <div className="flex justify-between flex-col items-center h-[50%] w-[50%]">
            <div className="rounded-full ">
              <img className="h-[100%] w-[100%] rounded-full " src={image} />
            </div>
            <div className='w-[55%]  flex flex-col justify-center'>
              <p className="text-3xl text-center">Name:Krishna Kalra</p>
              <p className="text-3xl text-center">Id:B123067</p>
              <p className="text-3xl text-center">City:DehraDun</p>
              <p className="text-3xl text-center">State:Uttarakhand</p>
            </div>
          </div>
          <div className="w-[100%] h-[50%]"></div>
        </div>
      </div>
      <div
        className="pcard m-4 h-[400px] w-[275px] backdrop-blur-md backdrop-brightness-[85%] hover:backdrop-brightness-[60%] transition-backdrop-brightness duration-500 border-2 rounded-xl border-[#E1E1E1] border-opacity-30 flex justify-around items-center flex-col text-[#002020] hover:text-[#ffffff]"
      >
        <div className="mt-3 rounded-full h-[195px] w-[195px]">
          <img className="h-[195px] w-[195px] rounded-full" src={image} />
        </div>
        <div className="flex items-center flex-col">
          <p className=" text-3xl">Krishna Kalra</p>
          <p className=" text-2xl">B123067</p>
        </div>
        <div className="flex w-[200px] justify-around">
          <FontAwesomeIcon className="size-7" icon={faInstagram} />
          <FontAwesomeIcon className="size-7" icon={faGithub} />
          <FontAwesomeIcon className="size-7" icon={faLinkedin} />
          <FontAwesomeIcon className="size-7" icon={faEnvelope} />
        </div>
      </div>
    </div>
  );
}

export default Batches;
