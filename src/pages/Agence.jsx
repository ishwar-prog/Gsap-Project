import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://i.pinimg.com/736x/52/24/98/5224989c338140cbfa3162c825712df3.jpg',
    'https://i.pinimg.com/736x/18/a8/77/18a87763c99a274ca9f8d6871ec5775d.jpg',
    'https://i.pinimg.com/736x/c1/0a/93/c10a93be67631bbd512c26b21ebf0994.jpg',
    'https://i.pinimg.com/736x/0d/0e/57/0d0e57abed4877b0d2c8883f0c93833a.jpg',
    'https://i.pinimg.com/736x/99/d1/74/99d174c828f59fd6b756014376dbec0d.jpg',
    'https://i.pinimg.com/736x/73/d0/33/73d0339cb60429fe3430b1d316e3a13d.jpg',
    'https://i.pinimg.com/736x/51/0d/f1/510df13d9e5f239afdbbcc39c81811ab.jpg',
    'https://i.pinimg.com/736x/49/a5/83/49a58302f604ba7ce93e86cd332e2102.jpg',
    'https://i.pinimg.com/736x/b8/66/0e/b8660e5029a36e70a46fd9e7c70bc690.jpg',
    'https://i.pinimg.com/736x/0a/be/ae/0abeae655fe5770ae5ff68baf97b8d4f.jpg',
    'https://i.pinimg.com/736x/32/d6/06/32d6061ea779c35664bfdf7ef455ffab.jpg',
    'https://i.pinimg.com/736x/1a/c1/da/1ac1da46d79ebdeaa2e490d27e364ca0.jpg',
    'https://i.pinimg.com/736x/9b/05/75/9b05755d09fd483820ee86126f59fbb0.jpg',
    'https://i.pinimg.com/736x/2e/09/c2/2e09c229801a65277a51b2ec1dddf9e3.jpg',
  ]

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 10%',
        end: 'top -145%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType:'transform',
        scrub: 1.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <div className='parent'>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-60 top-20 lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[45vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Seven7y <br />
              Two</h1>
          </div>
          <div className='lg:pl-[39.7%] lg:-mt-8 mt-8 px-4 md:px-6'>
            <p className='lg:text-6xl text-xl leading-[3.8vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity fuels our creativity. We stay humble and say no to big egos, even yours. A brand is alive. It has values, personality, and history. If we forget that, we can make good numbers in the short term, but we kill it in the long term. That's why we commit to providing perspective, to build influential brands.</p>
          </div>
        </div>
      </div>
      <div id='page2' className=" h-screen">

      </div>
    </div>
  )
}

export default Agence