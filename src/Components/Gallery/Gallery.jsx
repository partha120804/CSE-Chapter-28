import React from 'react'
import { RevealBentoR } from '../GalleryCard/Grid/GridRight'
import { RevealBentoL } from '../GalleryCard/Grid/GridLeft'
import image from '../../assets/Nature.jpg';
import Default from '../../assets/default.jpg'
function Gallery() {
  let slides=[image,Default,Default,Default,Default];
  return (
    <div>
      <RevealBentoR />
    </div>
  )
}

export default Gallery