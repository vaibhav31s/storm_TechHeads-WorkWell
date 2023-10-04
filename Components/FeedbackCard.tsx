import React from 'react'
import { Card } from 'flowbite-react'
import {AiOutlineFileAdd} from 'react-icons/ai'

type Props = {}

const FeedbackCard = (props: Props) => {
    const datas = {
        data:[
            {
                formId:'1',
                title:'Hackathon Review Feedback Form',
                totalFilled:29
            },
            {
                formId:'2',
                title:'General Feedback',
                totalFilled:59
            },
            {
                formId:'3',
                title:'Office Environment',
                totalFilled:50
            }
        ]
    }
  return (
    <div className='w-full'>
    <div className='flex justify-center items-center flex-wrap' style={{maxHeight:"400px"}}>
        {datas.data.map((form)=>(
            <Card key={form.formId} className='mx-2 w-48 h-48 hover:cursor-pointer hover:shadow-xl'>
                <h4 className='text-xl overflow-hidden whitespace-nowrap overflow-ellipsis'>{form.title}</h4>
                <div className='flex w-full justify-center items-center text-2xl font-bold'><p>{form.totalFilled}</p></div>
            </Card>
        ))}
    </div>

    <div className='flex mt-8 justify-center items-center'>
        <Card className='w-48 h-48 hover:cursor-pointer opacity-75 hover:opacity-100 hover:shadow-lg transition-all duration-100'>
            <div className='flex flex-col items-center'>
         <div className=''><AiOutlineFileAdd size={48}/></div>
         <h4 className='text-center'>Create New Feedback Form</h4>
            </div>
        </Card>
    </div>
    </div>

  )
}

export default FeedbackCard