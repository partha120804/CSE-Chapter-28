import React from 'react';
import { NavLink } from 'react-router-dom';
import "./event.css"
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RevealBentoR } from '../../GalleryCard/Grid/GridRight';
import advaita from "../../../assets/gallery/headingpics/advaita.png"
import marathon from "../../../assets/gallery/smallpics/advaitamarathon.png"

const data = [
  {
    "src": advaita,
    "title": "ADVAITA",
     "smalpics":{
        "pic1":"hello",
    }
  },
  {
    "src": "https://picsum.photos/seed/img2/600/400",
    "title": "FRESHER'S",
    "smalpics":{
        "pic1":"hello"
    }
  },
  {
    "src": "https://picsum.photos/seed/img3/600/400",
    "title": "TASVEER",
    "smalpics":{
        "pic1":"hello"
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

  return (
    <div >
    <div className="hidden lg:block slider-container ">
        
      <Slider {...settings}>
        {data.map((item, index) => {
            return(
            <div  className='p-3 ' key={index}>
              <NavLink  
            to={{
                pathname: "/Gallery/image",
                state: { smalpics: item.smalpics.pic1},
              }}
              >
              <div className='image-container rounded-2xl'>
            <img className='h-[70vh] w-[27vw] rounded-2xl hover:opacity-50 hover:backdrop-blur-lg  hover:backdrop-brightness-[30%]'
             src={item.src} title={item.title} />
             <div className='heading'><span className='text-5xl'>{item.title}</span></div>
             </div>
            
    </NavLink>
          </div>
            );
})}
      </Slider>
    </div>
    
    </div>
  );
};

export default Event;