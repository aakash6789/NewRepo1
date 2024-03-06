import React from 'react'
import pie from '../assets/pie.png'
const Tokenomics = () => {
  return (
    <div className='bg-white rounded-lg w-2/3 ml-[12vw] px-6 mt-[5vw] py-4'>
      <h1 className='text-[1.5em] font-semibold mb-[15px]'>Tokenomics</h1>
      <h2 className='font-semibold text-[1.2em] mb-[15px]'>Inital distribution</h2>
      <img src={pie} className='h-[170px]'></img>
      <p className='mt-[15px] mb-5'>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend
lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam
fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum
eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet
odio nisi eu ac risus.</p>
    </div>
  )
}

export default Tokenomics
