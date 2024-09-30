import React from 'react'
import image from '../../assets/Nature.jpg';
import Default from '../../assets/default.jpg'
import Event from './Event/Event';

function Gallery() {
  let slides=[image,Default,Default,Default,Default];
  return (
    <div className='flex h-[100%]  justify-center flex-col'>
      
      <Event/>
      
    </div>
  )
}

export default Gallery