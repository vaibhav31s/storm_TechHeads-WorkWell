import React from 'react'
import Cardss from '../../../Components/Cards/Cardss'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col space-y-4 p-16'>
        <h1 className='font-bold text-xl'>Engagement Forum : </h1>
       <Cardss/>
       <Cardss/>
       <Cardss/>
       <Cardss/>
    </div>
  )
}

export default page