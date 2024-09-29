import React from 'react'
import  "./about.css"
import AboutCard from './AboutCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mongoicon from "../../assets/logo/mongo.png"
import tailwindicon from "../../assets/logo/tailwind.png"
import {
 faReact,faHtml5,faCss3Alt,faJs,faNode,faGithub
} from "@fortawesome/free-brands-svg-icons";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiGithub, SiTailwindcss, SiNodedotjs, SiVercel, SiMongodb  } from "react-icons/si";

function about() {
  return (
    <div className="flex justify-center items-center  h-[100%] flex-col">
    <div className="text-center mt-5 mb-[60px]">
    <h1 className=" text-8xl lg:text-9xl mb-4 mr-[10%] ml-[10%] font-bold text-[#002F26] sofia">
  <span>About Us</span>
</h1>
<h1 className=" text-[#d0f0ea] ml-[10%] mr-[10%] flex flex-col items-center justify-center gap-5 text-justify">
<p className="text-2xl solway lg:text-4xl stroke text-center">Welcome to CSE Chapter'28</p>
      <p className="text-lg solway lg:text-3xl">
Crafted with passion and dedication, this website is the result of hard work and creativity from our team.
We hope this platform serves as a helpful resource for staying connected, informed, and inspired and you find it as exciting and useful as we envisioned!
</p>
</h1>
    </div>
<div className=' flex flex-col justify-center items-center mb-[90px]'>
  <h1 className='text-7xl lg:text-8xl mb-6 mr-[10%] ml-[10%] font-semibold text-white sofia'>Our Team</h1>
    <div className="cards flex-wrap flex flex-row justify-center gap-10 max-w-[80vw]">
      <AboutCard  named="Krishna Kalra" id="B123067" work="Developer"/>
      <AboutCard named="Shivashish Saklani" id="B123121" work="Developer"/>
      <AboutCard named="Vanessa Reddy" id="B123058" work="Developer"/>
      <AboutCard named="Partha Das" id="B123086" work="Developer"/>
      <AboutCard named="Kohinoor" id="B123083" work="Developer"/>
      
      
    </div>
</div>
<h1 className='text-5xl lg:text-7xl mb-5 mr-[10%] ml-[10%] text-white sofia'>Tech Stack Used</h1>
<div className='mr-[10%] ml-[10%] mb-10 flex flex-row justify-between align-middle text-lg gap-[1em] lg:text-4xl flex-nowrap lg:gap-[1.5em] text-[#d0f0ea]'>
  <SiReact title="React"/>
  <SiHtml5 title="HTML 5"/>
  <SiCss3 title="CSS 3"/>
  <SiJavascript title="JavaScript"/>
  <SiNodedotjs title="Node.js"/>
  <SiMongodb title="MongoDB"/>
  <SiTailwindcss title="TailwindCSS"/>
  <SiVercel title="Vercel"/>
  <SiGithub title="GitHub"/>
</div>
  </div>
  )
}

export default about