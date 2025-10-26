import React from 'react'
import RoundedVideo from './RoundedVideo'

const HomeHeroText = () => {
    return (
        <div className='font-[font1]  mt-70 lg:mt-0 lg:pt-5 pt-65 text-center'>
            <div className='lg:text-[9.5vw] text-[9vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[9vw]'>
                The spark
            </div>
            <div className='lg:text-[9.5vw] text-[9vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[9vw]'>
                that
                <div className='h-[9vw] w-[16vw] rounded-full -mt-0.5 overflow-hidden'>
                    <RoundedVideo />
                </div>
                generates
            </div>
            <div className='lg:text-[9.5vw] text-[9vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[9vw]'>
                creativity
            </div>
        </div>
    )
}

export default HomeHeroText