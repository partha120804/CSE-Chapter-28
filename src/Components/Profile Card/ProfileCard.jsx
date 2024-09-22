import React, { useEffect } from "react";
import { useState, useRef } from "react";
import image from "../../assets/default.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Profile.css';
import close from '../../assets/close.svg';
import DivOrigami from '../LogoAnimation/LogoAnimation.jsx'
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

 

function ProfileCard() {
  const [data, setData] = useState([]);
  const [load, LoadState] = useState(false);
  let datageter = () => {
    let response = {};
    let ApiCaller = async () => {
      LoadState(false);
      response = await axios.get(
        "https://cse-chapter-28-server.vercel.app/api/2027"
      );
      setData(response.data);
      console.log(response.data);
      LoadState(true);
    };
    ApiCaller();
    console.log(data[0]);
    
  };
  let [name, setName] = useState("");
  let [id, setId] = useState("");
  let [location, setLocation] = useState("");
  let [description, setDescription] = useState("");
  let [disable, setDisable] = useState("");
  useEffect(datageter, []);
  const [pop, popState] = useState("hidden");
  let popup = (item) => {
    if (item != {}) {
      setName(item.name);
      setId(item.id.slice(4));
      setLocation(item.Location);
      setDescription(item.Description);
    }
    popState("visible");
  };


  const modelRef= useRef();
  let popdown = (e) => {
    console.log(e.target);
    console.log(modelRef.current);
    if(e.target===modelRef.current)
    popState("hidden");
  };

  return (
    <div  className="flex flex-wrap gap-3 justify-center max-w-[100vw]">
      <div onClick={popdown} ref={modelRef} className={` popup flex justify-center items-center inset-0 fixed z-10 backdrop-blur-sm  ${pop}` }>
      <div
        className={` bg-white bg-opacity-[20%] onClickPopUp w-[60%] h-[70%] backdrop-blur-[15px] border-4 border-opacity-30 rounded-xl border-[#E1E1E1] flex flex-row align-center items-center popup-content`}
      >
        <div className="flex flex-col justify-center m-3  w-[40%] h-[95%]  my-8 popup-content">
          <div className="flex justify-between flex-col items-center h-[80%] w-[100%]">
            <div className=" h-[100%] ">
              <div className="relative h-[75%]">
                <img
                  className="h-[100%]  z-20 rounded-full border-[#002f26] border-8 "
                  src={image}
                />
                <div className="h-[80px] w-[80px] z-20 rounded-full bg-[#002f26] absolute  right-0 bottom-0 flex justify-center items-center">
                  <p className="text-white text-3xl font-bold">{Number(id)}</p>
                </div>
              </div>
              <div className="my-4">
                <p className="text-3xl text-center">{name}</p>
                <p className="text-1xl text-center">{location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80%] w-[0.3%] bg-[#002f26]"></div>
        <div className="h-[95%] w-[59.7%] flex flex-col justify-center items-center">
          <div className=" h-[80%] w-[90%]">
            <p className="text-3xl text-center font-bold">About Me</p>
            <div className="flex justify-center items-center h-[85%]">
              <textarea className="font-semibold text-2xl h-[80%] border-[15px] border-transparent w-[100%] bg-white bg-opacity-35 rounded-md resize-none placeholder-[#002f26] " disabled placeholder={description}  />
               
            </div>
            <div className="flex justify-around">
                <FontAwesomeIcon className="size-7  ease-in-out hover:scale-[1.3] transform" icon={faInstagram} />
                <FontAwesomeIcon className="size-7  ease-in-out hover:scale-[1.3] transform " icon={faGithub} />
                <FontAwesomeIcon className="size-7  ease-in-out hover:scale-[1.3] transform" icon={faLinkedin} />
                <FontAwesomeIcon className="size-7  ease-in-out hover:scale-[1.3] transform" icon={faEnvelope} />
            </div>
          </div>
        </div>
      </div>
      </div>
      {console.log(load)}
      {load ? (
        data.map((item) => (
          <div className="m-4 z-1">
            <div
              onClick={() => popup(item)}
              className="pcard  h-[400px] w-[275px] backdrop-blur-md backdrop-brightness-[80%] hover:backdrop-brightness-[60%] border-2 rounded-xl border-[#E1E1E1] border-opacity-30 flex justify-around items-center flex-col text-[#d0f0ea] hover:text-[#ffffff] hover:scale-[1.05] transform transition duration-500 ease-in-out"
            >
              <div className="mt-3 rounded-full h-[195px] w-[195px]">
                <img className="h-[195px] w-[195px] rounded-full" src={image} />
              </div>
              <div className="flex items-center flex-col">
                <p className=" text-3xl">{item.name}</p>
                <p className=" text-2xl">{item.id}</p>
              </div>
              <div className="flex w-[210px] justify-around">
                {/* <FontAwesomeIcon className="size-7" icon={faInstagram} /> */}
                <FontAwesomeIcon className="size-7 hover:text-[#ccfff0] hover:duration-500 ease-in-out hover:scale-[1.2] transform" icon={faInstagram} />
                <FontAwesomeIcon className="size-7 hover:text-[#ccfff0] hover:duration-500 ease-in-out hover:scale-[1.2] transform " icon={faGithub} />
                <FontAwesomeIcon className="size-7 hover:text-[#ccfff0] hover:duration-500 ease-in-out hover:scale-[1.2] transform" icon={faLinkedin} />
                <FontAwesomeIcon className="size-7 hover:text-[#ccfff0] hover:duration-500 ease-in-out hover:scale-[1.2] transform" icon={faEnvelope} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <DivOrigami/>
      )}
    </div>
  );
}

export default ProfileCard;
