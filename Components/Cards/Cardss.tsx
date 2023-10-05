"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { title } from "process";
import React, { use, useEffect, useState } from "react";
import { FaHandsClapping } from "react-icons/fa6";
import { PiHandsClappingBold } from "react-icons/pi";

type Props = {
  key: number,
  forum:any,
};
const liker= async (id:any) => {
  console.log(id);
  fetch(`/api/forum/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      postId: id,
    }),
  })
    .then(async (response) => {
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });
}
const formatDate = (date: string | undefined) => {
  if (date === undefined) return "";
  const d = new Date(date!);
  return d.toDateString();
};

const Cardss = (props: any) => {
  const router = useRouter();
  const forum = props.forum;

  console.log(forum);
  const [select, setSelect] = useState(false);
 

  return (
    <div>
      <article
        
        className="card-zoom p-3 md:p-6 cursor-pointer bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 md:min-w-[450px]"
      >
        <div className="flex justify-between items-center mb-5 text-gray-500">
          <div className="flex items-center space-x-2">
            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clip-rule="evenodd"
                ></path>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
              </svg>
              Article
            </span>
        
          </div>

          {forum && (
          <span className="text-sm">{forum?.date}</span>
          )}
        </div>
        {forum && (
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Link href={`/forum/${forum?.id}`}>{forum?.title}</Link>
        </h2>
             )}

{forum && (
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
          {forum && forum.description && forum.description.slice(0, 20)}
        </p>
             )}

{forum && (
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              className="w-7 h-7 rounded-full"
              src={`https://api.dicebear.com/5.x/personas/svg?seed=${forum?.avatar}}`}
              alt="Bonnie Green avatar"
            />
        {
            select ? (
              <FaHandsClapping onClick={async()=>{
            
                setSelect(!select);
                
               
              }}/>
            ) : (
              <PiHandsClappingBold onClick={async()=>{
                await liker(forum?.id);
                setSelect(!select);
                
               
              }}/>
            )
        }
           
            <span className="text-sm md:text-lg font-medium dark:text-white">
              {forum?.avatar}
            </span>
          </div>
          <div className="text-xs md:text-lg inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
            Tags
            <svg
              className="ml-2 w-4 h-4 hidden md:block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {
              
              forum?.tagged.map((tag:any) => (
                <img
                className="w-7 h-7 rounded-full"
                src={`https://api.dicebear.com/5.x/personas/svg?seed=${tag}}`}
                alt="Bonnie Green avatar"
              />
              ))
           
           

          }
          
          </div>
        </div>
     )}
   
      </article>
    </div>
  );
};

export default Cardss;
