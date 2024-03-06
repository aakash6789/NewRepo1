import React from 'react'
import KoinXlogo from '../assets/KkoinX-1657031694106.avif'
const Navbar = () => {
  return (
    <div>
      <nav className='relative h-[10.1vh] bg-white'>
       <img src={KoinXlogo} className='h-[70px] absolute left-[5%]'></img>
        <div className='flex  justify-between px-6 w-2/4 absolute left-[50%] right-[0%] top-4 text-[3%vw] '>
        <span className='font-bold py-1'>Crypto Taxes</span>
        <span className='font-bold py-1'>Free Tools</span>
        <span className='font-bold py-1'>Resource Center</span>
        <button className='text-white bg-blue-700 rounded-lg px-6 p-1'>Get started</button>
        </div>  
      </nav>
    </div>
  )
}

export default Navbar
