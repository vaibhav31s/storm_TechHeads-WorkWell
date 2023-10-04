"use client";
import React from "react";
import Question from "./Question";
type Props = {};
//option to select from 1 to 10



const Form = (props: Props) => {
  const responses = new Array(10);

  return (
    <div className="justify-center items-center flex flex-col border border-red-300">
      <div className="flex flex-col border border-red-400 p-10 space-y-9">
      <Question id={0}  arr = {responses}/>

      <Question id={1}  arr = {responses}/>

      <Question id={2} arr = {responses} />


        <button className="border shadow-lg p-2 fill-black bg-blue-600 rounded-md	 " onClick={()=>console.log(responses)}>
          Click Here to Submit  
        </button>
      </div>
    </div>
  );
};

export default Form;
