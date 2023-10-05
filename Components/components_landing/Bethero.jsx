import React from 'react'
import double from '../assets/double.png'
import single from '../assets/single.png'
import triple from '../assets/triple.png'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

const BetHero = () => {
  return (
    <div className='bg-white h-full'>
            <div className='max-w-[900px] pt-[10rem] w-full mx-auto'>
                <div className='w-full grid md:grid-cols-3 gap-8 text-center px-12 md:px-0'>
                    <div className='flex flex-col py-5 md:mx-2 shadow-2xl my-20 hover:scale-110 duration-300'>
                        <img className='mx-auto w-[150px] mt-[-100px] bg-white ' src='https://img.freepik.com/premium-vector/list-concept-illustration_270158-301.jpg?size=626&ext=jpg&ga=GA1.2.383518309.1696429127&semt=sph'/>
                        <h1 className='mx-6 font-bold text-2xl mt-[50px]'>Surveys</h1>
                        <p className='mx-6 font-bold md:text-4xl py-[25px] text-3xl border-b-2'></p>
                        <p className='mx-6 py-2 font-medium border-b-2'>Satisfaction Surveys</p>
                        <p className='mx-6 py-2 font-medium border-b-2'>Pulse Surveys</p>
                        <p className='mx-6 py-2 font-medium border-b-2'>eNPS Surveys</p>
                        <button className='my-6 py-2 w-[200px] mx-auto rounded-lg font-bold bg-indigo-600 text-white '>Start Trial</button>

                    </div>
                    <div className='flex flex-col py-5 shadow-2xl my-20  md:my-16  hover:scale-110 duration-300'>
                        <img className='mx-auto w-[150px] mt-[-100px] bg-white ' src='https://img.freepik.com/free-vector/organic-flat-feedback-concept-illustrated_23-2148951369.jpg?size=626&ext=jpg&ga=GA1.2.383518309.1696429127&semt=sph'/>
                        <h1 className='mx-6 font-bold text-2xl mt-[50px]'>Feedbacks</h1>
                        <p className='mx-6 font-bold md:text-4xl py-[25px] text-3xl border-b-2'></p>
                        <p className='mx-6 py-2 font-medium border-b-2'>360 degrees feedback</p>
                        <p className='mx-6 py-2 font-medium border-b-2'>continous feedback cycle</p>
                        <p className='mx-6 py-2 font-medium border-b-2'>feedback from peers, managers and subordinates</p>
                        <button className=' my-6 py-2 w-[200px] mx-auto rounded-lg font-bold bg-indigo-600 text-black'>Start Trial</button>
                    </div>

                    <div className='flex flex-col py-5 md:mx-2 shadow-2xl my-20 hover:scale-110 duration-300'>
                        <img className='mx-auto w-[150px] mt-[-115px] bg-white ' src='https://img.freepik.com/free-vector/award-ribbon-check-mark-with-stars-gradient-style_78370-1098.jpg?w=740&t=st=1696474958~exp=1696475558~hmac=de082793e316c2dae5fc6624e4da84754215cf05b5fa739caf36cff134a3b233'/>
                        <h1 className='mx-6 font-bold text-2xl mt-[50px]' >Rewards</h1>
                        <p className='mx-6 font-bold md:text-4xl py-[25px] text-3xl border-b-2'></p>
                        <p className='mx-6 py-2 font-medium border-b-2'>Based on surveys</p>
                        <p className='mx-6 py-2 font-medium border-b-2'>Exciting gift cards</p>
                        <p className='mx-6 py-2 font-medium border-b-2'>Travelling Tickets</p>
                        <button className='my-6 py-2 w-[200px] mx-auto rounded-lg font-bold bg-indigo-600 text-white'>Start Trial</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BetHero