import React, { useEffect,useState } from 'react'
import Bitcoinimg from '../assets/Bitcoin.png'
import axios from 'axios'
import greenT from '../assets/gt1.png'
import Chart from './Chart'
const ChartComponent = () => {
    const [data, setData] = useState(null);
    useEffect(()=>{
        const source = axios.CancelToken.source();
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true')
        .then(response => {     
          setData(response.data);      // Handle successful response
          console.log(data);
          console.log(response);
        })
        .catch(error => {
          // Handle error
          console.error('Error fetching data from api:', error);
        });

        return()=>{
            source.cancel("Request cancelled due to cleanup")
        };
    },[])
  return (
    <div className=' bg-white w-2/3 ml-[12vw] mt-[4vh] h-[130vh] pt-4 rounded-lg relative px-2'>
      { data ? <>
        <div className='flex absolute left-[5%]'>
       <img src={Bitcoinimg} className='h-[40px] mr-[5px] mt-3' alt='bitcoin-img'></img>
       <span className='font-bold text-[1.3rem] pt-3'>Bitcoin</span>
       <span className='text-gray-500 ml-[10px] pt-4 font-semibold'>BTC</span>
       <button className='text-white bg-gray-500 rounded-lg p-2 mt-2 ml-[2vw]'>Rank #1</button>
        </div>
        <div className='flex absolute mt-[12vh] left-[6%]'
        >
            <span className='mr-[10px] text-[2.0em] font-semibold'>${data.bitcoin.usd}</span>
            <span className='bg-green-100 rounded-lg px-3 text-[green] text-[1em] py-[2px] flex ml-[3.2vw] my-2'>
            {/* <div className="w-0 h-0 border-solid border-8 border-green-500 border-l-0 border-t-8 border-r-8"></div> */}

           <span className=' bg-green-100'><img src={greenT} className='h-[8px] bg-green-100 mt-[10px] mr-[4px]' alt='triangle-img'></img></span>

                {Math.round(data.bitcoin.usd_24h_change * 100) / 100}% 
                </span>
           <span className='ml-[1vw] text-[0.7em] mt-[14px]'>(24 H)</span>
            </div>
           <h2 className='mt-[14%] absolute left-[6%] font-semibold'>&#8377; {data.bitcoin.inr}</h2>
            </>: <div>Loading ...</div>
}
<Chart/>
    </div>
  )
}

export default ChartComponent
