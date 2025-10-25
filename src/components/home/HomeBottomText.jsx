import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <p className='absolute lg:w-[23vw] w-64 lg:right-5 right-0 bottom-28  lg:bottom-50 font-[font1] lg:text-lg text-xs lg:leading-tight leading-tight flex justify-end '>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center px-5  lg:px-8 border-white rounded-full uppercase space-y-2'>
        <Link className='text-[6.5vw] lg:mt-5' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-25 flex items-center px-5  lg:px-8 border-white rounded-full uppercase space-y-2'>
        <Link className='text-[6.5vw] lg:mt-5' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText