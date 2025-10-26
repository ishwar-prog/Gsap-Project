import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <p className='absolute lg:w-[23vw] w-64 lg:right-5 right-0 bottom-28  lg:bottom-50 font-[font1] lg:text-lg text-xs lg:leading-tight leading-tight flex justify-end '>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that considers every action to nurture the brand. Tomorrow, in 5 months and in 5 years. We seek the friction that creates the spark to generate emotion. To ensure an honest relationship, we are unfiltered, we say what needs to be said, we do what needs to be done.</p>
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