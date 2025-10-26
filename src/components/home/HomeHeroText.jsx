import React from 'react'
import RoundedVideo from './RoundedVideo'

const HomeHeroText = () => {
    return (
        <div className='font-[font1]  mt-70 lg:mt-0 pt-5 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                The spark
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                that
                <div className='h-[7vw] w-[16vw] rounded-full -mt-0.5 overflow-hidden'>
                    <RoundedVideo />
                </div>
                generates
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                creativity
            </div>
        </div>
    )
}

export default HomeHeroText