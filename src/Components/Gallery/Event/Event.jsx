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
    "src": "https://picsum.photos/seed/img2/600/400",
    "title": "FRESHER'S",
    "smalpics":{
        "pic1":marathon
    }
  },
  {
    "src": "https://picsum.photos/seed/img3/600/400",
    "title": "TASVEER",
    "smalpics":{
        "pic1":marathon
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
          breakpoint: 600, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };
    const navigate = useNavigate();
  return (
    <div >
    <div className="hidden lg:block slider-container ">
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
             <div className='heading'><span className='text-5xl'>{item.title}</span></div>
             </div>
                         

            
   
          </div>
            );
})}
      </Slider>
    </div>
    
    </div>
  );
};

export default Event;