import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h3 className='text-4xl font-bold py-6 text-center italic'>"Productivity is never an incident, It is always the result of commitment to excellence , intelligence , planning and focused efforts"</h3>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>~Paul J Meyer</h2>
          </div>

          <div className='px-6 grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl hover:scale-110'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Social Intranet</h3>
                      <p className='text-gray-600 text-xl'>Connect employee with the organisation through open and transparent communication</p>
                  </div>
                
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:scale-110'>
                  <div className='p-8'>
                      <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Recognition</h3>
                      <p className='text-gray-600 text-xl'>Encourage peer-to-peer recognition to foster trust and collaboration among teams</p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:scale-110'>
                  <div className='p-8'>
                      <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Rewards</h3>
                      <p className='text-gray-600 text-xl'>Delight employee with an extensive global catalog with more than 20000 reward choices</p>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;