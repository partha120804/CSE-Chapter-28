import React from 'react'
import ProfileCard from '../Profile Card/ProfileCard';
function Batches({year}) {
  console.log(year);
  return (
    <div className="flex flex-wrap justify-center">
      <ProfileCard year={year}/>
    </div>
  );
}

export default Batches;
