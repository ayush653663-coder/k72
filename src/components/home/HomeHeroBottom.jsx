import React from 'react'
import {Link} from 'react-router-dom'

const HomeHeroBottom = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <p className='absolute lg:w-[17vw] w-64 lg:right-20 right-0 lg:bottom-72 bottom-28 font-[font1] lg:text-lg text-xl lg:leading-relaxed leading-tight '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.

</p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex pt-1 uppercase border-3 border-white px-3 items-center rounded-full lg:px-14 '>
      <Link className="text-[6vw] lg:mt-6" to='/project'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex pt-1 uppercase border-3 border-white px-3 items-center rounded-full lg:px-14 '>
            <Link className="text-[6vw] lg:mt-6 " to='/agence'>Agence</Link>
      </div>
  
    </div>
  )
}

export default HomeHeroBottom
