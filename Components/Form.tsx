"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Question from "./Question";
import Form from "../types/Form";



type Props = {};
//option to select from 1 to 10

const datas = {
  "id": "651d4a68dcef21f99e56280f",
  "title": "not latest",
  "description": "hi latest",
  "cc": [
      "tansh@gmail.com",
      "hey@gmail.com"
  ],
  "userId": "651d1f73aab3bc90125a3935",
  "questions": [
      {
          "id": "651d4a68dcef21f99e562810",
          "title": "How you like environment in oracle?",
          "type": [
              "mot",
              "chot"
          ],
          "options": [
              "good",
              "bad"
          ],
          "formId": "651d4a68dcef21f99e56280f"
      },
      {
          "id": "651d4a68dcef21f99e562811",
          "title": "How is work life balance? ",
          "type": [
              "mot",
              "chot"
          ],
          "options": [
              "good",
              "bad"
          ],
          "formId": "651d4a68dcef21f99e56280f"
      },
      {
          "id": "651d4a68dcef21f99e562812",
          "title": "How is oracle mumbai branch?",
          "type": [
              "mot",
              "chot"
          ],
          "options": [
              "good",
              "bad"
          ],
          "formId": "651d4a68dcef21f99e56280f"
      }
  ]
}

const Form = (props: Props) => {
  const { data, status } = useSession();
  const [forms, setForms] = useState<Form[]>([]);

  console.log("form user " ,data?.user?.id)

  const responses = new Array(10);
  // const fetchBlogs = async (q: string) => {
  //   fetch(`/api/form `)
  //     .then((res) => res.json())
  // };

  const [title, setTitle] = useState("This is title");
  const questionss = datas.questions;
  return (
    <div className="justify-center items-center flex flex-col border rounded-md dark:text-white">
      
      <div className="flex flex-col border p-10 space-y-9 w-1/3 m-10 rounded-md">
      <h1 className="text-2xl font-bold">{datas?.title}</h1>
        {questionss.map((question, index) => {
          return <Question index={index} arr={responses} title = {question.title}/>;
        })}

        <div className="flex flex-col space-y-2">
          <label className="text-xl">Any other comments?</label>
          <textarea className="border border-gray-400 rounded-md p-2"></textarea>
        </div>

        <button
          className="border shadow-lg p-2 fill-black bg-blue-600 rounded-md	 "
          onClick={async() =>  {
           await fetch(`/api/form/${datas.id}`, {

              method: "POST",
              body: JSON.stringify({
                userId : data?.user?.id,
                questions: questionss,
                responses: responses,
              }),
            });
          }}
        >
          Click Here to Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
