import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import gsap from 'gsap'
import transition from '../transition'
import Image from 'next/image'



const about = () => {


  return (

    <div className="landing-section h-screen w-full flex justify-center">


      <div className="landing-wrapper flex justify-center items-center h-screen max-w-7xl px-10 gap-10">


      <div className="left-col text-white w-1/2">
          <h2 className="title text-6xl pb-5"> ABOUT</h2>
          <p className="text-content pb-2">With a foundation in UX design and marketing, I understand the importance of user experience and effective communication, ensuring my code resonates with my clients.</p>
          <p className="text-content pb-2">My creative hobbies in photography/videography have honed my eye for aesthetics and attention to detail, which I channel into crafting visually appealing and user-centric UI/UX.</p>
          <p className="text-content pb-2">I graduated from the University of North Texas with a degree in Information Technology and a focus of web development/cyber security. I use my professional knowledge and skills to bring my creative ideas to life. Being able to apply these skills to contribute to a real creative project is like watching my dreams turn into reality.</p>
          <div className="contact-links"></div>
        </div>

        <div className="right-col w-1/2 relative rounded-2xl overflow-hidden max-h-[650px]">
          <Image src="../warren-g3.jpg" alt="" />
        </div>


      </div>



    </div>



  )
}

export default transition(about)