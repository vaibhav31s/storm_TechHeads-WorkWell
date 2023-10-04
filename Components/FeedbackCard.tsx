import React from 'react'
import { Card } from 'flowbite-react'

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
            },
            {
                formId:'4',
                title:'Office Culture',
                totalFilled:66
            }
        ]
    }
  return (
    <div className='w-full flex justify-center items-center'>
        {datas.data.map((form)=>(
            <Card key={form.formId} className='mx-2 w-48'>
                <div className='text-xl'>{form.title}</div>
                <div className='text-center text-2xl font-bold'>{form.totalFilled}</div>
            </Card>
        ))}
    </div>

  )
}

export default FeedbackCard