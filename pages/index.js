import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import transition from '../transition';
import homeTransition from '../homeTransition';
import gsap from 'gsap';
import React, { useEffect } from 'react'
import Image from 'next/image'





function Home() {




  return (




    <div className="landing-section h-full md:h-screen w-full flex justify-center sm:px-4">

      {/* <div className="home-loader h-full md:h-screen w-full flex justify-center items-center bg-slate-900 absolute z-50">
        <div className="relative flex justify-center overflow-hidden py-6">
          <div className="logo-wrapper relative bg-white flex justify-center items-center rounded-full h-44 w-44">
            <h3 className="text-4xl">W/G</h3>
          </div>
        </div>
      </div> */}


      <div className="landing-wrapper flex flex-col-reverse md:flex-row justify-center h-full md:h-screen max-w-screen-lg px-5 md:p-0 max-h-[1100px]">

        <div className="left-col lg:w-1/2 relative flex items-end	hidden md:flex">
          <Image src="/warren-g2.png" alt="" width='2000px' height="2800px"/>
        </div>

        <div className="right-col text-white h-screen md:h-full lg:w-1/2 flex flex-col justify-center">

          <div className="title text-3xl sm:text-6xl"> 
            <h2 className="relative overflow-hidden"><span>Software</span></h2> 
            <h2 className="relative overflow-hidden"><span>Developer /</span></h2> 
            <h2 className="relative overflow-hidden"><span>UX/UI</span></h2> 
            <h2 className="relative overflow-hidden"><span>Professional</span></h2>
          </div>

          <div className="text-content py-6">
            <p className="relative overflow-hidden"><span>I am a Full-Stack Web Developer based in Dallas, Texas with 5+ years</span></p>
            <p className="relative overflow-hidden"><span>of experience. I utilize my experience in marketing and computer</span> </p>
            <p className="relative overflow-hidden"><span>engineering to create efficiently-coded, engaging websites.</span></p>
          </div>

          <div className="cta-links py-6">
            <Link href='/work'><button className="border-solid border-white border rounded-full px-8 py-2 mr-2 transition hover:bg-zinc-800">View Projects</button></Link>
            <button className="border-solid border-white border rounded-full px-8 py-2 mx-2 transition hover:bg-zinc-800"><Link href='/about'>Resume</Link></button>
          </div>
        </div>

      </div>
      

    </div>
  );
}

export default transition(Home);
