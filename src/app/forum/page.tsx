'use client'
import React from 'react'
import Cardss from '../../../Components/Cards/Cardss'
import { Button } from 'flowbite-react'
import {BsFileEarmarkPostFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation';
type Props = {}
const forums = 
  [
    [
        {
            "id": "651e2dabd44f850d2a8bd23c",
            "likes": 0,
            "userId": "651da9cc15cb2219d0185730",
            "title": "New Post",
            "description": "Hey this is my first post , hope everyones doing well",
            "tagged": [
                "651da9cf15cb2219d0185731",
                "651da9d215cb2219d0185732"
            ],
            "date": "2023-10-05T03:29:47.855Z",
            "user": {
                "id": "651da9cc15cb2219d0185730",
                "avatar": "tanish",
                "email": "1@gmail.com",
                "password": "$2b$10$pc8EDNwU4TLEVoFTNWGd9OVc20Jfm4fs8AnEhOHV7SOOmUsE874jS",
                "name": "Vaibhav",
                "role": "Employee",
                "empId": null,
                "points": 0,
                "formIds": [
                    "651daa0115cb2219d0185737"
                ]
            }
        }
    ]
]


const page = (props: Props) => {
  const router = useRouter();
  const [forums, setForums] = React.useState<any>();

  const getForums = async () => {
    await fetch("/api/forum")
      .then(async(response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return await response.json();
      })
      .then((data) => {
        console.log(data);
    
        setForums(data);
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  }

    React.useEffect(() => {
        getForums();
    }, []);
  
  return (
    <div className='dark:text-white flex flex-col space-y-4 p-16'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-xl justify-between'>Engagement Forum : </h1>
        <Button className=''>Add Post  <BsFileEarmarkPostFill size={15} onClick={()=>{router.push("/forum/create")}}/></Button>
      </div>

    {forums && forums.map((forum:any) => {
        return <Cardss forum={forum}/>
        })}
        
       
    </div>
  )
}

export default page