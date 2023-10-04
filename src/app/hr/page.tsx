"use client";
import { Sidebar, Card } from "flowbite-react";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { RiSurveyFill } from "react-icons/ri";
// import {HiUser} from 'react-icon/hi';
import ApexChart from "react-apexcharts";

type Props = {};

const page = (props: Props) => {
  let emp_no = 50;
  var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  return (
    <>
      <div className="flex">
        <Sidebar className="h-[95vh]">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item>Dashboard</Sidebar.Item>
              <Sidebar.Item>Feedback</Sidebar.Item>
              <Sidebar.Item>Surveys</Sidebar.Item>
              <Sidebar.Item>Rewards</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <div className="h-full m-4">
          <div className="card-container flex">
            <Card className="mx-2 items-center">
              <h4 className="text-2xl text-center items-center">
                Total Employees{" "}
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
          <div className="chat-container">

          </div>
        </div>
      </div>
    </>
  );
};

export default page;
