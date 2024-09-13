import React from 'react'
import ChapterLogo from '../../assets/logo/chapterlogo.svg'
function home() {
  return (
    <div>
        <div className='flex justify-center align-middle'>
            <img className='h-[400px] w-[700px]' src={ChapterLogo}/>
        </div>
        
    </div>
    
  )
}

export default home