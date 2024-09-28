import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiYoutube } from "react-icons/si";
import { TiSocialTwitter } from "react-icons/ti";
import image from '../../../assets/Nature.jpg';
import Default from '../../../assets/default.jpg'
import { useLocation } from 'react-router-dom';

export const RevealBentoR = () => {
 
  
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-7xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border bg-white p-5",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  const location = useLocation();
  const smalpics = location.state && location.state.smalpics;
  return(
  
  <Block className="col-span-12  row-span-2 md:col-span-6">
    <h1 className="mb-2 border-white ">
      <img className=" object-cover" src={smalpics.pic1}></img>
    </h1>
    <p className="text-black text-center text-3xl">#FRESHER 2023</p>
  </Block>
);
}

const SocialsBlock = () =>{
  const location = useLocation();
  const smalpics = location.state && location.state.smalpics;
 
  return (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-white border-b-[40px] border-white md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <img className="aspect-square object-cover" src={smalpics.pic2} />
    
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-white border-b-[40px] border-white md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <img className="aspect-square object-cover" src={smalpics.pic3}/>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 border-b-[40px] border-white md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <img className="aspect-square object-cover" src={smalpics.pic4}/>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-white border-b-[40px] border-white md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <img className="aspect-square object-cover" src={smalpics.pic5}/>
      </a>
    </Block>
  </>
);
}

