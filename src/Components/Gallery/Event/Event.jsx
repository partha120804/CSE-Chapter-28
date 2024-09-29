import React from 'react';
import { NavLink } from 'react-router-dom';
import "./event.css"
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RevealBentoR } from '../../GalleryCard/Grid/GridRight';
import { useNavigate } from 'react-router-dom';
import advaita from "../../../assets/gallery/headingpics/advaita.png"
import marathon from "../../../assets/gallery/smallpics/advaitamarathon.png"
import lamode from "../../../assets/gallery/smallpics/lamode.png"
import robo from "../../../assets/gallery/smallpics/robo.png"
import valo from "../../../assets/gallery/smallpics/valo.png"
import crowd from "../../../assets/gallery/smallpics/crowd.png"
import inside from "../../../assets/gallery/smallpics/inside.png"
import f from "../../../assets/gallery/smallpics/f.png"
import acad from "../../../assets/gallery/smallpics/acad.png"
import senior from "../../../assets/gallery/smallpics/senior.png"
import freshertitile from "../../../assets/gallery/smallpics/freshertitile.png"
import t1 from "../../../assets/gallery/smallpics/t1.png"
import t2 from "../../../assets/gallery/smallpics/t2.png"
import t3 from "../../../assets/gallery/smallpics/t3.png"
import t4 from "../../../assets/gallery/smallpics/t4.png"
import t5 from "../../../assets/gallery/smallpics/t5.png"
import tasveer from "../../../assets/gallery/headingpics/tasveer2.png"
import fresher from "../../../assets/gallery/headingpics/fresher.png"

const data = [
  {
    "src": advaita,
    "title": "ADVAITA",
     "smalpics":{
      "pic1":crowd,
        "pic2":marathon,
        "pic3":lamode, 
        "pic4":robo, 
        "pic5":valo,         

    }
  },

  {
    "src": tasveer,
    "title": "TASVEER",
    "smalpics":{
        "pic1":t1,
        "pic2":t2,
        "pic3":t3, 
        "pic4":t4, 
        "pic5":t5,
    }
    },
    {
      "src": fresher,
      "title": "FRESHER'S",
      "smalpics":{
          "pic1":freshertitile,
          "pic2":acad,
          "pic3":senior, 
          "pic4":inside, 
          "pic5":f,
      }
    },
];

function Event() {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets and larger screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For smaller tablets and larger phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 480, // For smaller phones
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
    const navigate = useNavigate();
  return (
    <div className='flex justify-center'>
    <div className="slider-container  ">
      <Slider {...settings}>
        {data.map((item, index) => {
            const handleClick = (item) => {
                console.log(item);
                navigate('/Gallery/image', { state:{smalpics:item.smalpics} });
              };
            return(
            <div  className='p-3 ' key={index}>
              <div onClick={()=>handleClick(item)} className='image-container rounded-2xl'>
            <img className='h-[70vh] w-[27vw] rounded-2xl hover:opacity-50 hover:backdrop-blur-lg  hover:backdrop-brightness-[30%]'
             src={item.src} title={item.title} />
             
             </div>
                         

            
   
          </div>
            );
})}
      </Slider>
    </div >
    
    
    </div>
  );
};

export default Event;