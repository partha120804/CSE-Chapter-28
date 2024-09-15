import React, { useEffect } from "react";
import { useState } from "react";
import image from "../../assets/default.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
function ProfileCard() {

    // let data;
    // useEffect(()=>{
    //   let ApiCaller= async ()=>{
    //     data= await axios.get('http://localhost:3000/api/2027');
    //   }
    //   ApiCaller();
    // });

    //console.log(data[0].name);

    const [pop, popState] = useState("hidden");
    let popup=()=>{
    if(pop=='hidden')
        popState('visible');
    else
    popState('hidden');
    };
  return (
    <div className='flex flex-wrap gap-3 justify-center max-w-[100vw]'onClick={popup}>
        <div
        className={`absolute z-10 bg-white bg-opacity-[20%] onClickPopUp w-[60%] h-[70%] backdrop-blur-md border-4 border-opacity-30 rounded-xl border-[#E1E1E1] flex flex-row align-center ${pop} items-center`}
      >
        <div className="flex flex-col justify-center m-3  w-[40%] h-[95%]  my-8 ">
          <div className="flex justify-between flex-col items-center h-[80%] w-[100%]">
            <div className=" h-[100%] ">
              <div className="relative h-[75%]">
                <img
                  className="h-[100%]  z-20 rounded-full border-[#002f26] border-8 "
                  src={image}
                />
                <div className="h-[80px] w-[80px] z-20 rounded-full bg-[#002f26] absolute  right-0 bottom-0 flex justify-center items-center">
                  <p className="text-white text-3xl font-bold">167</p>
                </div>
              </div>
              <div className="my-4">
                <p className="text-3xl text-center">Krishna Kalra</p>
                <p className="text-1xl text-center">DehraDun</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80%] w-[0.3%] bg-[#002f26]"></div>
        <div className="h-[95%] w-[59.7%] flex flex-col justify-center items-center">
          <div className=" h-[80%] w-[90%]">
            <p className="text-3xl text-center font-bold">About Me</p>
            <div className="flex justify-center items-center h-[85%]">
              <div className=" border-[15px] border-transparent w-[100%] bg-white bg-opacity-30 rounded-md">
                <p className="text-2xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="flex justify-around">
              <FontAwesomeIcon className="size-7" icon={faInstagram} />
              <FontAwesomeIcon className="size-7" icon={faGithub} />
              <FontAwesomeIcon className="size-7" icon={faLinkedin} />
              <FontAwesomeIcon className="size-7" icon={faEnvelope} />
            </div>
          </div>
        </div>
      </div>
      <div className="pcard m-4 h-[400px] w-[275px] backdrop-blur-md backdrop-brightness-[85%] hover:backdrop-brightness-[60%] transition-backdrop-brightness duration-500 border-2 rounded-xl border-[#E1E1E1] border-opacity-30 flex justify-around items-center flex-col text-[#002020] hover:text-[#ffffff]">
        <div className="mt-3 rounded-full h-[195px] w-[195px]">
          <img className="h-[195px] w-[195px] rounded-full" src={image} />
        </div>
        <div className="flex items-center flex-col">
          <p className=" text-3xl">Krishna Kalra</p>
          <p className=" text-2xl">B123067</p>
        </div>
        <div className="flex w-[210px] justify-around">
          <FontAwesomeIcon className="size-7" icon={faInstagram} />
          <FontAwesomeIcon className="size-7" icon={faGithub} />
          <FontAwesomeIcon className="size-7" icon={faLinkedin} />
          <FontAwesomeIcon className="size-7" icon={faEnvelope} />
        </div>
      </div>
    </div>
  )
}

export default ProfileCard