'use client'
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  const [userData, setUserData]= useState(null);
  let res={}
  
  useEffect(()=>{
     fetch("/api/pillars")
     .then((response)=>{
      if(!response.ok){
        throw new Error("Network response was not ok");
      }
      return response.json();
     })
     .then((data)=>{
       console.log(data)
       res=data
       console.log(data)
      setUserData(data)
     })
     .catch((error)=>{
      console.log("Error fetching user data:",error)
     })
  },[])
  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Communication", "Productivity", "Motivation", "Engagement"]
      }
    },
    series: [
      {
        name: "Overall Enterprise Score",
        data: [40, 90, 45, 30]
      }
    ]
  };
  return (
    <div className=''>
    <ApexChart 
    options={state.options}
    series={state.series}
    type="bar"
    width="600"
    />
    </div>
  )
}

export default BarChart