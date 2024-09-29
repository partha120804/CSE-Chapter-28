import React from 'react'
import  "./about.css"
import AboutCard from './AboutCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mongoicon from "../../assets/logo/mongo.png"
import tailwindicon from "../../assets/logo/tailwind.png"
import {
 faReact,faHtml5,faCss3Alt,faJs,faNode,faGithub
} from "@fortawesome/free-brands-svg-icons";
import krishna from "../../assets/about/krishna.png"
import vanessa from "../../assets/about/vanessa.png"
import priyanshu from "../../assets/about/priyanshu.png"

function about() {
  return (
    <div className="flex justify-center items-center  h-[100%] flex-col">
    <div className="max-w-6xl text-center mt-5 mb-[60px]">
    <h1 className="text-9xl mb-4 font-bold text-[#002F26] css">
  <span>A</span>
  <span>b</span>
  <span>o</span>
  <span>u</span>
  <span>t</span>
  <span> </span>
  <span>U</span>
  <span>s</span>
</h1>
<p className="text-3xl pb-8 color text-[#d0f0ea] font-[500] stroke">Welcome to CSE Chapter'28</p>
      <p className="text-2xl color text-[#d0f0ea] font-[500]">
Crafted with passion and dedication, this website is the result of hard work and creativity from our team.
We hope this platform serves as a helpful resource for staying connected, informed, and inspired and you find it as exciting and useful as we envisioned!
</p>
    </div>
<div className=' flex flex-col justify-center items-center mb-[90px]'>
  <h1 className='text-[5rem] font-semibold text-white mb-10 css'>Our Team</h1>
    <div className="cards flex-wrap flex flex-row justify-center gap-10 max-w-[80vw]">
      <AboutCard  named="Krishna Kalra" pic={krishna}  work=" Frontend || Backend "/>
      <AboutCard named="Shivashish Saklani"  work="Frontend "/>
      <AboutCard named="Vanessa Reddy" pic={vanessa} work="UI/UX"/>
      <AboutCard named="Partha Das" id="B123086" work="Frontend || UI/UX"/>
      <AboutCard named="Kohinoor"  work="Frontend || UI/UX "/>
      <AboutCard named="Priyanshu Shekhar" pic={priyanshu} work="UI||UX"/>
      <AboutCard named="Manasmita Pradhan"  work="Content"/>
      <AboutCard named="Dhairyawan Kumar Tiwari"  work=" Frontend "/>
      
      
    </div>
</div>
<h1 className='text-6xl text-white font-semibold mb-10'>TechStack Used</h1>
<div className='flex flex-row flex-wrap justify-center gap-[3em]'>
<FontAwesomeIcon icon={faReact} className='text-6xl font-semibold' style={{color: "#4ab6c9",}} />
<FontAwesomeIcon icon={faHtml5} className='text-6xl font-semibold' style={{color: "#f78318",}} />
<FontAwesomeIcon icon={faCss3Alt} className='text-6xl font-semibold' style={{color: "#0778cf",}} />
<FontAwesomeIcon icon={faJs} className='text-6xl font-semibold' style={{color: "#e0ea57",}} />
<FontAwesomeIcon icon={faNode} className='text-6xl font-semibold' style={{color: "#15a252",}} />
<img  className=" h-[3.75em]  translate-y-[-9]" src={mongoicon} alt="" />
<img  className=" h-[3.75em]  translate-y-[-9]" src={tailwindicon} alt="" />
<FontAwesomeIcon className='text-6xl font-semibold' icon={faGithub} />
</div>
  </div>
  )
}

export default about