import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
// import csetasveer from '../../../assets/gallery/BatchPics';
import csea27 from '../../../assets/gallery/BatchPics/csea27.jpg';
import cseb27 from '../../../assets/gallery/BatchPics/cseb27.jpg';
import tasveer1 from '../../../assets/gallery/BatchPics/tasveer1.jpg';
import tasveer2 from '../../../assets/gallery/BatchPics/tasveer2.jpg';
import "./slider.css";

 function Slider () {
 
      
    let slides = [
      {
        "src": tasveer2,
        "alt": "Tasveer img cse2"
      },
      {
        "src": csea27,
        "alt": "CSE-A 2027"
      },
      {
        "src": cseb27,
        "alt": "CSE-B 2027"
      },
      {
        "src": tasveer1,
        "alt": "Tasveer img cse1"
      }
    ]
         
    
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftShort onClick={prevSlide} className="arrow arrow-left " />
      {slides.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide object-cover" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightShort
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
export default Slider