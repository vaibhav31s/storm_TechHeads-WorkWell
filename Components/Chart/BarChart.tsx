'use client'
import React from 'react'
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
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