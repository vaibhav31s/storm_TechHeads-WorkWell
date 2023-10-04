"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Question from "./Question";
import Form from "../types/Form";
import { ToastContainer, toast } from "react-toastify";



type Props = {
  formId: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
};
//option to select from 1 to 10


const Form = (props: Props) => {
  const { data, status } = useSession();
  const [forms, setForms] = useState<Form[]>([]);


  const formId = props.formId;
  const setShowModal = props.setShowModal;
  console.log("form user " ,data?.user?.id)

  console.log("form id " ,formId)
  const responses = new Array(10);
  // const fetchBlogs = async (q: string) => {
  //   fetch(`/api/form `)
  //     .then((res) => res.json())
  // };

  const [datas, setDatas] = useState<any>();

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/form/${formId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setDatas(data.data);
      } else {
        console.error("Failed to fetch data:", response.status);
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
      throw error;
    }
  };

  React.useEffect(()=>{
    fetchData(); 
   },[])
  const [title, setTitle] = useState("This is title");
  const questionss = datas?.questions;
  console.log("questions", questionss);
  return (
    <div className=" flex-col border rounded-md dark:text-white text-black p-2">
      
      <div className="justify-center flex flex-row justify-items-center items-center relative">
      <h1 className="text-2xl font-bold ">{datas?.title}</h1>
      </div>
        {datas?.questions && questionss && questionss.map((question, index) => {
          return <Question index={index} arr={responses} title = {question.title}/>;
        })}

        <div className="flex flex-col space-y-2">
          <label className="text-xl">Any other comments?</label>
          <textarea className="border  rounded-md p-2 dark:text-black  "></textarea>
        </div>
        <div className="justify-center flex flex-row justify-items-center items-center relative ">
        <button
          className="border shadow-lg p-2 fill-black bg-blue-600 rounded-md 	 "
          onClick={async() =>  {
           await fetch(`/api/form/${datas.id}`, {

              method: "POST",
              body: JSON.stringify({
                userId : data?.user?.id,
                questions: questionss,
                responses: responses,
              }),
            }).then((res) => {
              if (res.status === 200) {
                alert("Successfully Fille the form!")
                setShowModal(false)
              } else {
                alert("There is some issue Please try again letter")
                setShowModal(false)
              }
            }
            );
          }
        }
        >
          Click Here to Submit
        </button>
        </div>
    </div>
  );
};

export default Form;
