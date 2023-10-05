import React from 'react'

const About = () => {
  return (
    <div name='about' className='dark:bg-black dark:text-white w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>More reasons to choose WorkWell</h2>
                <p className='text-2xl py-6 text-gray-500'>HR teams use WorkWell Surveys to collect feedback on people initiatives, organizational communication and culture, recognition and rewards programs.</p>
            </div>

            <div className=' px-6 grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div  className='border py-8 mx-3 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>20k+</p>
                    <p className='text-gray-400 mt-2'>Rewards in wide categories</p>
                </div>
                <div className='border py-8 mx-3 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>360 degrees</p>
                    <p className='text-gray-400 mt-2'>Feedback Mechanisms</p>
                </div>
                
                <div className='border py-8 mx-3 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Trusted Users</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About