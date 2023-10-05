'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Button, TextInput, Textarea,Checkbox,Label } from 'flowbite-react'

type Props = {}

const page = (props: Props) => {
  const [title,setTitle] =useState("")
  const [message,setMsg] = useState("")
  const {data}=useSession()
  let users: any[]=[]
  const tagged=[]

  const getUsers:any=async()=>{
    await fetch("/api/user")
    .then(  (response)=>{
      if(response.ok){
        console.log("Users fetched")
      }
      else{
        throw new Error("Fetching Failed")
      }
      return  response.json();
    }).then((rdata)=>{
      users=rdata
      console.log(rdata)
    })
    .catch((error)=>{
      console.error("Error occured:",error)
    })
  }

  useEffect(()=>{
    getUsers()
  },[])
  

  const handleClick =async (e)=>{
    const Msgdata = {
      title:title,
      description:message,
      tagged:[],
      userId:data?.user?.id
    }

    console.log(Msgdata)

    try{
      const response=await fetch("/api/forum",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Msgdata),
      });

      if(response.ok){
        console.log("Message Posted Successfully")
      }
      else{
        console.log("Message was not posted")
      }
    }catch(error){
      console.error("Error occurred:",error)
    }
  }
  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <h1 className='font-bold text-xl my-4'>Create Forum : </h1>
        <div className='flex flex-col w-1/2'>
          <TextInput placeholder='Enter Post Title' name='post-title' value={title} onChange={(e)=>{setTitle(e.target.value)}} className='my-2'/>
          <Textarea placeholder='Enter your message' name='post-message' value={message}  onChange={(e)=>{setMsg(e.target.value)}} className='my-2'/>
         

          <div className='flex mt-4 justify-center items-center'>
            <Button className='px-4' onClick={handleClick}>Post It</Button>
          </div> 
        </div>
    </div>
  )
}

export default page