import React from 'react'
import profit from '../assets/profits.png'
import liab from '../assets/liab.png'

const AboutBitcoin = () => {
  return (
    <div className='bg-white rounded-lg w-2/3 ml-[12vw] px-6 mt-[10vw] py-4'>
        <h1 className='font-bold text-[1.7em]  '>About Bitcoin</h1>
         <h2 className='font-bold mt-[15px] text-[1.2em]'>What is bitcoin?</h2>
         <p className='font-normal'>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last
24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time
low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
<hr className='bg-gray-100 w-80% px-2 mt-[15px] '></hr>
      <h2 className='font-bold mt-[15px]'> Lorem ipsum dolor sit amet </h2>
      <p className='font-normal font-medium'>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus
urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sec
Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
<br></br>
<p className='font-normal'>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet.
Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus
enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc.
Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
phasellus. Integer pellentesque enim convallis ultricies at.</p>
<br></br>
<p className='font-normal'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing
semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames
amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
<hr className='bg-gray-100 w-80% px-2 mt-[15px] '></hr>
<h2 className='font-bold text-[1.5em] ml-[0vw] mb-[15px] mt-[15px]'>Already Holding Bitcoin?</h2>
<div className='flex max-sm:flex-col'>
<div className='max-sm:w-[100%]'>
<img className='min-sm:w-[42%]  rounded-lg max-sm:w-[100%] ' src={profit} ></img>
</div>
<div className='max-sm:w-[full]'>
<img className='min-sm:w-[42%] ml-8 rounded-lg max-sm:w-[100%] max-sm:ml-[0] max-sm:mt-4' src={liab} ></img>
</div>
</div>
<hr className='bg-gray-100 w-80% px-2 mt-[15px] '></hr>
<p className='font-normal mt-[15px]'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing
semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames
amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>

    </div>
  )
}

export default AboutBitcoin
