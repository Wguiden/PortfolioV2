import Contact from '../components/Contact'
import Hero from '../components/Hero'
import React, { useState, useEffect } from 'react'
import gsap from "gsap";
import scrollTrigger from "gsap";
import transition from '../transition'


const contact = () => {



  return (
    <div>
        <Contact />
    </div>
  )
}

export default transition(contact);