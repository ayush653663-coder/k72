import React from 'react'
import Video from '../components/home/Video';
import HomeHeroBottom from '../components/home/HomeHeroBottom';
import HomeHeroText from '../components/home/HomeHeroText';
const Home = () => {
  return (
    <div  className='text-white'>
    <div className='h-screen w-screen fixed'>
     <Video />
    </div>
    <div className='h-screen w-screen pb-5 relative flex flex-col justify-between'>
<HomeHeroText/>
<HomeHeroBottom />
    </div>
    </div> 
   
  )
}

export default Home
