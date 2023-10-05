'use client'
import React from 'react'
import Cardss from '../../../Components/Cards/Cardss'
import { Button } from 'flowbite-react'
import {BsFileEarmarkPostFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation';
type Props = {}

const page = (props: Props) => {
  const router = useRouter();
  
  return (
    <div className='dark:text-white flex flex-col space-y-4 p-16'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-xl justify-between'>Engagement Forum : </h1>
        <Button className=''>Add Post  <BsFileEarmarkPostFill size={15} onClick={()=>{router.push("/forum/create")}}/></Button>
      </div>
       <Cardss/>
       <Cardss/>
       <Cardss/>
       <Cardss/>
    </div>
  )
}

export default page