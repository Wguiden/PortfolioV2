import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import gsap from 'gsap'
import transition from "../transition"
import Image from 'next/image'



const work = () => {
  

  return (
    <div className="work md:pt-40 md:p-20 sm:pb-10 py-24 p-10">

      <div className="text-white text-3xl md:text-6xl text-center">Projects</div>

      <div className="wrapper grid md:grid-cols-3 grid-cols-1 gap-8 md:pt-20 pt-10 gap-y-8 sm:gap-y-20">


      <div className="flex flex-col justify-start items-center text-white">

        <div id="inner-content" className="max-w-lg">
          <div className="w-full h-60 sm:h-80 h-full rounded-2xl relative overflow-hidden mb-5">
            <a href="https://whiteunicornagency.com/" target="_blank" rel="noreferrer">
              <Image src="/projects/WU-project-compressed.png" alt="" className="absolute h-full w-full object-cover hover:scale-105 transition-all duration-500" layout="fill" objectFit="cover"/>
            </a>
          </div>       

          <p className="text-3xl">
            <a href="https://whiteunicornagency.com/" className="hover:text-slate-500 transition-all" target="_blank" rel="noreferrer">White Unicorn</a>
          </p>
          <p className="text-gray-400">Worked with development and design team to create a clean professional website for the Agency to showcase all their clients and past projects.</p>
        </div>

      </div>


        
        <div className="flex flex-col justify-start items-center text-white">

          <div id="inner-content" className="max-w-lg">
            <div className="w-full h-60 sm:h-80 h-full rounded-2xl relative overflow-hidden mb-5">
              <a href="https://quiet-selkie-894032.netlify.app/"  target="_blank" rel="noreferrer">
                <Image src="/projects/crypto-tracker-compressed.jpeg" alt="" className="absolute h-full w-full object-cover hover:scale-105 transition-all duration-500" layout="fill" objectFit="cover"/>
              </a>
            </div>       

            <p className="text-3xl">
              <a href="https://quiet-selkie-894032.netlify.app/" className="hover:text-slate-500 transition-all" target="_blank" rel="noreferrer">Crypto Tracker</a>
            </p>
            <p className="text-gray-400">Track the top crypto currency prices using Coingecko API. Prices can be displayed in USD or ETH. Coins historical price data is shown and charted to the user with options for selecting time intervals.</p>
          </div>

        </div>




        <div className="flex flex-col justify-start items-center text-white">

          <div id="inner-content" className="max-w-lg">
            <div className="w-full h-60 sm:h-80 h-full rounded-2xl relative overflow-hidden mb-5">
              <a href="https://happyjoes.com/"  target="_blank" rel="noreferrer">
                <Image src="/projects/Happy-joes-compressed.jpg" alt="" className="absolute h-full w-full object-cover hover:scale-105 transition-all duration-500" layout="fill" objectFit="cover"/>
              </a>
            </div>       

            <p className="text-3xl">
              <a href="https://happyjoes.com/" className="hover:text-slate-500 transition-all" target="_blank" rel="noreferrer">Happy Joes</a>
            </p>
            <p className="text-gray-400">Informational restaurant project that pulls data from the Storerocket API to populate data based off each store. Project includes interactive map store locator.</p>
          </div>

        </div>



        <div className="flex flex-col justify-start items-center text-white">

          <div id="inner-content" className="max-w-lg">
            <div className="w-full h-60 sm:h-80 h-full rounded-2xl relative overflow-hidden mb-5">
              <a href="http://jaydreaming.mysites.io/"  target="_blank" rel="noreferrer">
                <Image src="/projects/jayDreaming-compressed.jpg" alt="" className="absolute h-full w-full object-cover hover:scale-105 transition-all duration-500" layout="fill" objectFit="cover"/>
              </a>
            </div>       

            <p className="text-3xl">
              <a href="http://jaydreaming.mysites.io/" className="hover:text-slate-500 transition-all"  target="_blank" rel="noreferrer">Jay Dreaming</a>
            </p>
            <p className="text-gray-400">E-commerce site developed with Wordpress and later transferred to Shopify.</p>
          </div>

        </div>




        <div className="flex flex-col justify-start items-center text-white">

        <div id="inner-content" className="max-w-lg">
          <div className="w-full h-60 sm:h-80 h-full rounded-2xl relative overflow-hidden mb-5">
            <a href="https://cedarcide.com/"  target="_blank" rel="noreferrer">
              <Image src="/projects/cedarcide-compressed.jpg" alt="" className="absolute h-full w-full object-cover hover:scale-105 transition-all duration-500" layout="fill" objectFit="cover"/>
            </a>
          </div>       

          <p className="text-3xl">
            <a href="https://cedarcide.com/" className="hover:text-gray-500 transition-all"  target="_blank" rel="noreferrer">Cedarcide</a>
          </p>
          <p className="text-gray-400">E-commerce site developed with Wordpress and later transferred to Shopify. Site was optimized to handle hundreds of thousands yearly users and multi-million dollars of online sales.</p>
        </div>

        </div>



        <div className="flex flex-col justify-start items-center text-white">

          <div id="inner-content" className="max-w-lg">
            <div className="w-full h-60 sm:h-80 h-full rounded-2xl relative overflow-hidden mb-5">
              <a href="https://bespoke-gaufre-6f4afb.netlify.app/" target="_blank" rel="noreferrer">
                <Image src="/projects/Yearly-goals-compressed.jpeg" alt="" cla  target="_blank"ssName="absolute h-full w-full object-cover hover:scale-105 transition-all duration-500" layout="fill" objectFit="cover"/>
              </a>
            </div>       

            <p className="text-3xl">
              <a href="https://bespoke-gaufre-6f4afb.netlify.app/" className="hover:text-slate-500 transition-all"  target="_blank" rel="noreferrer">Yearly Goals</a>
            </p>
            <p className="text-gray-400">Yearly Goal Tracker with the ability to add, update, and delete yearly goals. Future updates will include completion markers, responsive design, and filtered categories (fitness, work, person, etc...).</p>
          </div>

        </div>                                      



      </div>

    </div>
  )
}

export default transition(work);