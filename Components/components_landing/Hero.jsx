import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'
import umar from "public/attendaceLogo.png";


// import bgImg from 'https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?size=626&ext=jpg&ga=GA1.1.383518309.1696429127'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen dark:bg-black dark:text-white bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1000px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Make continuous improvements with feedback</p>
                <h1 className='py-7 text-5xl md:text-7xl font-bold'>WorkWell</h1>
                <p className='text-2xl'>Fill survey forms and redeem rewards for exceptional performance.</p>
                <button className='py-3 px-6 sm:w-[60%] my-6 text-white border bg-indigo-600 border-indigo-600
    hover:bg-transparent hover:text-indigo-600 rounded-md'>Get Started</button>
            </div>
            <div class="sm:w-full lg:w-full">
                    <img class="hidden sm:block w-full" src={umar.src} alt="/" />
                </div>
           
        </div>
    </div>
  )
}

export default Hero