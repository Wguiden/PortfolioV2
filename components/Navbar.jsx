import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#111');
        //setTextColor('#000000');
      } else {
        setColor('transparent');
        //setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300 z-20'
    >

      <div className='max-w-[1240px] m-auto flex justify-center items-center p-4 text-white'>

        <ul style={{ color: `${textColor}` }} className='flex gap-5 text-sm sm:text-lg sm:gap-5 items-center'>
          <li className='text-center'>
            <Link href='/work'>Projects</Link>
          </li>
          <li className='text-center'>
            <Link href='/resume'>Resume</Link>
          </li>
          <li>
            <Link href='/'>
              <Image src="../logos/WG-logo.png" alt="" className="w-14  sm:w-20 cursor-pointer max-w-none"/>
            </Link>
          </li>
          <li className='text-center'>
            <Link href='/about'>About</Link>
          </li>
          <li className='text-center'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>Work</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
