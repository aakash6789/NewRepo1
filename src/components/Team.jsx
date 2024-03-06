import React from 'react'
import john1 from '../assets/john1.png'
import elina from '../assets/elina.png'
import john2 from '../assets/john2.png'

const Team = () => {
  return (
    <div className='bg-white rounded-lg w-2/3 ml-[12vw] px-6 mt-[5vw] py-4'>
      <h1 className='font-semibold text-[1.5em]'>Team</h1>
      <p className='mt-[15px] font-normal'>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit
egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
<div className='flex bg-blue-50 mt-4 rounded-lg'>
<div className='mt-2  w-[55%]'>
    <img src={john1} className='w-[100px] text-[1rem] ml-[2vw]' style={{width:"100px"}}></img>
    <p className='font-semibold text-[1.2em] mt-3 text-center'>John Smith</p>
    <p className='text-gray-500 mt-1 mb-4 text-center text-[1em] font-normal'>Designation here</p>
</div>
<p className='ml-2 pt-8'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.
Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus
gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent
interdu</p>
</div>
<div className='flex bg-blue-50 mt-4 rounded-lg'>
<div className='mt-2  w-[55%]'>
    <img src={elina} className='w-[100px] text-[1rem] ml-[2vw]' style={{width:"100px"}}></img>
    <p className='font-semibold text-[1.2em] mt-3 text-center'>Elina Williams</p>
    <p className='text-gray-500 mt-1 mb-4 text-center text-[1em] font-normal'>Designation here</p>
</div>
<p className='ml-2 pt-8'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.
Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus
gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent
interdu</p>
</div>
<div className='flex bg-blue-50 mt-4 rounded-lg'>
<div className='mt-2  w-[55%]'>
    <img src={john2} className='w-[100px] text-[1rem] ml-[2vw]' style={{width:"100px"}}></img>
    <p className='font-semibold text-[1.2em] mt-3 text-center'>John smith</p>
    <p className='text-gray-500 mt-1 mb-4 text-center text-[1em] font-normal'>Designation here</p>
</div>
<p className='ml-2 pt-8'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.
Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus
gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent
interdu</p>
</div>
    </div>
  )
}

export default Team
