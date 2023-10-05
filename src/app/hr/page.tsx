"use client";
import BarChart from "@/Components/Chart/BarChart";
import FeedbackCard from "@/Components/FeedbackCard";
import { Sidebar, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { RiSurveyFill } from "react-icons/ri";
import Survey from "@/Components/Survey";
import Rewards from "@/Components/Rewards";
import { useSession } from "next-auth/react";

// import {HiUser} from 'react-icon/hi';


// emp_no=userData.resData.users.Employee.length;
const HRDashboard = () => {
  const [userData, setUserData]= useState({});
  const [emp_no,setEmp] = useState(0)
  let [xcat,setXCat] = useState<string[]>([])
  let [series,setSeries] = useState<unknown[]>([])
  // let xcat: string[]=[]
  // let series: unknown[]=[]
  const getSurveyData:any = async()=>{
    await  fetch("/api/pillars")
     .then((response)=>{
      if(!response.ok){
        throw new Error("Network response was not ok");
      }
      return response.json();
     })
     .then((data)=>{
       console.log(data.resData)
      setUserData(data)
      // setEmp(data.resData.users.Employee.length)
      setEmp((data.resData.users.Employee.length)*10)
      // console.log(data.resData.attributes)
      const att=data.resData.attributes
      console.log(Object.keys(att))
      console.log(Object.values(att))
      setXCat(Object.keys(att))
      // xcat=Object.keys(att)
      setSeries(Object.values(att))
      // series=Object.values(att)
     })
     .catch((error)=>{
      console.log("Error fetching user data:",error)
     })
  }
  
const session = useSession();

if(session.data?.user?.role !== "Hr"){
  return <div>Access Denied</div>
}

  React.useEffect(()=>{
    getSurveyData()
  },[])
 
  return (
    <>
      <div className="card-container flex">
        <Card className="mx-2 items-center">
          <h4 className="text-2xl text-center items-center">
            Total Employees
          </h4>
          <div className="flex w-full justify-center items-center">
            <BsFillPersonFill size={50} />
          </div>
          <h5 className="text-center text-4xl font-bold">{emp_no}</h5>
        </Card>

        <Card className="mx-2">
          <h4 className="text-2xl">Total Manager</h4>
          <div className="flex w-full justify-center items-center">
            <GrUserManager size={50} />
          </div>
          <h5 className="text-center text-4xl font-bold">{emp_no}</h5>
        </Card>

        <Card className="mx-2">
          <h4 className="text-2xl">Total Surveys</h4>
          <div className="flex w-full justify-center items-center">
            <RiSurveyFill size={50} />
          </div>
          <h5 className="text-center text-4xl font-bold">{emp_no}</h5>
        </Card>

        <Card className="mx-2">
          <h4 className="text-2xl">Total Employees</h4>
          <h5 className="text-center text-4xl font-bold">{emp_no}</h5>
        </Card>
      </div>

      <div className="flex chat-container mt-8">
        <BarChart xcat={xcat} series={series}/>
      </div>
    </>
  );
};
type Props = {};

const page = (props: Props) => {
  const [cur, setCur] = useState(1);
  const handleClick = (key: React.SetStateAction<number>) => {
    setCur(key);
    console.log(cur);
  };

  return (
    <>
      <div className="flex h-full">
        <Sidebar className="h-[95vh]">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="h-[95vh]">
              <Sidebar.Item key={1} onClick={() => handleClick(1)}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item key={2} onClick={() => handleClick(2)}>
                Feedback
              </Sidebar.Item>
              <Sidebar.Item key={3} onClick={() => handleClick(3)}>
                Surveys
              </Sidebar.Item>
              <Sidebar.Item key={4} onClick={() => handleClick(4)}>
                Rewards
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <div className="h-full w-full m-4 justify-center items-center">
          {cur === 1 && <HRDashboard />}
          {cur === 2 && <FeedbackCard />}
          {cur === 3 && <Survey />}
          {cur === 4 && <Rewards />}
        </div>
      </div>
    </>
  );
};

export default page;
