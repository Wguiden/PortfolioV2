import React from 'react'
import Image from 'next/image'


const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen flex justify-center flex-col items-center'>
        <h1 className='text-2xl sm:text-4xl font-bold text-center p-4 text-white'>Lets work together</h1>
        <form className='max-w-[600px]'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' />
                <input className='border shadow-lg p-3' type="email" placeholder='Email' />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2 text-white'>Submit</button>
        </form>
    </div>
  )
}

export default Contact