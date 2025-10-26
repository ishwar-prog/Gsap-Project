import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'   


const Projects = () => {

  const projects = [{
    image1: 'https://i.pinimg.com/1200x/13/96/02/139602786747596011c746065ca21e07.jpg',
    link1: 'https://open.spotify.com/artist/5C1S9XwxMuuCciutwMhp5t?si=RJ_ufSqvQ7S8-6bMu_f6TA',
    image2: 'https://i.pinimg.com/736x/12/b7/16/12b7166e85078b32eb7b3018709b797d.jpg',
    link2:'https://open.spotify.com/artist/5UdFr0GeO7jKIaNIJgwB36?si=jM8RhptWSHOhwHEhOesdsA'

  }, {
    image1: 'https://i.pinimg.com/1200x/ce/84/ec/ce84ecab101d77e5df51730258dd2c1e.jpg',
    link1:'https://open.spotify.com/artist/4Ai0pGz6GhQavjzaRhPTvz?si=2S3CxglyQfKDJClzc8D41w',
    image2: 'https://i.pinimg.com/736x/06/63/c7/0663c7ef85993cc02aa7147a0a7cf7ac.jpg',
    link2:'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg?si=XVDLGJW0RaCEYi9z6kZQSA'
  }, {
    image1: 'https://i.pinimg.com/1200x/f4/f1/55/f4f1559a8f8c28f4616236aa87918593.jpg',
    link1:'https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY?si=hvk6TA85SyuAD7vjhwQW5A',
    image2: 'https://i.pinimg.com/736x/fb/02/33/fb023370a85ce7efb7a5c0d66b514335.jpg',
    link2:'https://open.spotify.com/artist/5NHm4TU5Twz7owibYxJfFU?si=vsvOB9DqQiG6X_ogNNtWfA'
  },{
    image1:'https://i.pinimg.com/736x/cc/e4/3e/cce43e45bd0409b42b470f2415b4209f.jpg',
    link1:'https://open.spotify.com/artist/6DARBhWbfcS9E4yJzcliqQ?si=F010OXD4TQiXWMvndkRysQ',
    image2:'https://i.pinimg.com/736x/29/cd/59/29cd5977abf4d883aab2a67103303c09.jpg',
    link2:'https://open.spotify.com/artist/4nVa6XlBFlIkF6msW57PHp?si=ZEufGH9rQtmMBNofX0Rw3Q'
  },{
    image1:'https://i.pinimg.com/1200x/07/6c/79/076c79e0492ab7c32d500dcbec73cb40.jpg',
    link1:'https://open.spotify.com/artist/3fWcIRZlzhMl2YNACMvHui?si=uckdEoTCST6T4s6CWj1Olg',
    image2:'https://i.pinimg.com/1200x/2a/71/7d/2a717d483b46dc47d215854c7c749eab.jpg',
    link2:'https://open.spotify.com/artist/0TwG8C39WJIfFlcPrhxHST?si=na19IzJWQhyYloiwVgz7MQ'
  },{
    image1:'https://i.pinimg.com/736x/92/80/ac/9280ac8855062de85a3da99bfc532654.jpg',
    link1:'https://open.spotify.com/artist/07iEy1AecUPVzfC2J2gCHR?si=SUnJmLj1RYaQOBdOXark-Q',
    image2:'https://i.pinimg.com/736x/e2/64/ca/e264cafcf15154d1b11a5bda63b98563.jpg',
    link2:'https://open.spotify.com/artist/2oBG74gAocPMFv6Ij9ykdo?si=DaVQEO1cS4Ghcgb-odA7FQ'
  }];
  

  gsap.registerPlugin(ScrollTrigger)
  // ScrollTrigger.normalizeScroll(true);

  useGSAP(function () {
    // Only apply animation for screens larger than mobile (min-width: 768px)
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.from('.hero', {
        height: '100px',
        stagger: {
          each: 0.15,
          ease: "power2.out",
          force3D: true
        },
        ease: "power2.inOut",
        duration: 0.8,
        force3D: true,
        scrollTrigger: {
          trigger: '.lol',
          start: 'top 80%',
          end: 'bottom -50%',
          scrub: 1,
          toggleClass: "active",
          anticipatePin: 1,
        }
      });
    });
  })

  return (
    <div className='lg:p-4 md:p-2 p-2 mb-[100vh]'>
      <div className='pt-[45vh] md:pt-[40vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] md:text-[8vw] text-7xl uppercase'>Projects</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] md:h-[600px] mb-4 flex lg:flex-row md:flex-row flex-col lg:gap-4 md:gap-2 gap-2 transform-gpu will-change-transform'>
            <ProjectCard 
              image1={elem.image1}
              image2={elem.image2}
              link1={elem.link1}
              link2={elem.link2}
            />
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects


