import React, { useState } from "react";
import { Button, Card, TextInput, Textarea } from "flowbite-react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

type Props = {};

const Survey = (props: Props) => {
  const [showCreate, setShow] = useState(false);
  const [allForms,setAllForms] = useState([])
  const [surveyData, setSurveyData] = useState({
    title: "",
    description: "",
    questions: [
      { title: "", type: "", options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
    ],
  });
  const datas = {
    data: [
      {
        title: "Survey1",
        description: "Description of the survey",
        cc: [],
        questions: [
          {
            title: "title1",
            type: "Motivation",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            title: "title2",
            type: "Communication",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            title: "title3",
            type: "Productivity",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            title: "title4",
            type: "Engagement",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        ],
      },
      {
        title: "Survey2",
        description:
          "Description of the survey. A survey to track your performance monthly to keep you up to date",
        cc: [],
        questions: [
          {
            title: "title1",
            type: "Motivation",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            title: "title2",
            type: "Communication",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            title: "title3",
            type: "Productivity",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            title: "title4",
            type: "Engagement",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        ],
      },
      {
        title: "Survey3",
        description: "Description of the survey",
        cc: [],
        questions: [
          {
            title: "title1",
            type: "Motivation",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            title: "title2",
            type: "Communication",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            title: "title3",
            type: "Productivity",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            title: "title4",
            type: "Engagement",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        ],
      },
    ],
  };

  const handleInputChange = (
    e,
    questionIndex,
    optionIndex
  ) => {
    const { name, value } = e.target;

    if (name === "title") {
      setSurveyData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (name === "description") {
      setSurveyData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }else if(name === "questionTitle"){
        console.log("QuestionTitle:"+value)
        const updateQuestions = [...surveyData.questions]
        updateQuestions[questionIndex].title=value;
        setSurveyData((prevData) => ({
            ...prevData,
            questions: updateQuestions,
          }));

    }else if (name === "questionType") {
      const updatedQuestions = [...surveyData.questions];
      updatedQuestions[questionIndex].type = value;

      setSurveyData((prevData) => ({
        ...prevData,
        questions: updatedQuestions,
      }));
    } else if (name === "questionOption") {
      const updatedQuestions = [...surveyData.questions];
      updatedQuestions[questionIndex].options[optionIndex] = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
      ];

      setSurveyData((prevData) => ({
        ...prevData,
        questions: updatedQuestions,
      }));
    }
  };

  const handleAddQuestion = () => {
    setSurveyData((prevData) => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        { title: "", type: "", options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      ],
    }));
  };

  const handleRemoveQuestion = (questionIndex: number) => {
    const updatedQuestions = surveyData.questions.filter(
      (question, index) => index !== questionIndex
    );

    setSurveyData((prevData) => ({
      ...prevData,
      questions: updatedQuestions,
    }));
  };

  const getSurveyData:any = async()=>{
    await  fetch("/api/form")
     .then((response)=>{
      if(!response.ok){
        throw new Error("Network response was not ok");
      }
      return response.json();
     })
     .then((data)=>{
       console.log(data)
       setAllForms(data.allForms)
     })
     .catch((error)=>{
      console.log("Error fetching user data:",error)
     })
  }
  
  React.useEffect(()=>{
    getSurveyData()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(surveyData)
    try {
      const response = await fetch("api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(surveyData),
      });

      if (response.ok) {
        console.log("Form submitted succesfully!");
      } else {
        console.log("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full">
      {!showCreate ? (
        <>
          <div
            className="flex justify-center items-center flex-wrap"
            style={{ maxHeight: "400px" }}
          >
            {/* {datas.data.map((questions) => (
              <Card className="mx-2 w-48 h-48 hover:cursor-pointer hover:shadow-xl">
                <h4 className="text-xl font-bold">{questions.title}</h4>
                <h5 className="text-base overflow-hidden overflow-ellipsis">
                  {questions.description}
                </h5>
              </Card>
            ))} */}
            <div className="flex overflow-x-auto w-full">

            {allForms.map((questions) => (
                <Card className="mx-2 w-48 h-48 hover:cursor-pointer hover:shadow-xl">
                <h4 className="text-xl font-bold">{questions.title}</h4>
                <h5 className="text-base overflow-hidden overflow-ellipsis">
                  {questions.description}
                </h5>
              </Card>
            ))}
            
            </div>
          </div>
          <div className="flex mt-8 justify-center items-center">
            <Card className="w-48 h-48 hover:cursor-pointer opacity-75 hover:opacity-100 hover:shadow-lg transition-all duration-100">
              <div
                className="flex flex-col items-center"
                onClick={() => {
                  setShow(!showCreate);
                }}
              >
                <div className="">
                  <AiOutlineFileAdd size={48} />
                </div>
                <h4 className="text-center">Create New Survey</h4>
              </div>
            </Card>
          </div>
        </>
      ) : (
        <>
          <div className="">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
              <Button
                onClick={() => {
                  setShow(!showCreate);
                }}
              >
                <BiArrowBack size={20} /> Go Back
              </Button>

              <h3 className="my-4 text-2xl uppercase font-bold mt-6">
                Create Survey
              </h3>

              <div className="flex flex-col w-1/2">
                <TextInput
                  sizing="lg"
                  name="title"
                  value={surveyData.title}
                  onChange={handleInputChange}
                  placeholder="Enter Title"
                  className="my-2"
                />
                <Textarea placeholder="Enter description" className="my-2" name="description" value={surveyData.description} onChange={handleInputChange} />
              </div>
              <div className="flex flex-col items-center w-full">
                <h2 className="text-center text-xl font-bold mt-4">Questions</h2>
                {surveyData.questions.map((question, questionIndex) => (
                  <div key={questionIndex} className="flex flex-col w-1/2 my-4">
                    <TextInput
                      name="questionTitle"
                      onChange={(e) => handleInputChange(e, questionIndex)}
                      value={question.title}
                      className="my-2"
                    />
                    <select
                      name="questionType"
                      onChange={(e) => handleInputChange(e, questionIndex)}
                      value={question.type}
                      className="my-2"

                    >
                      <option value="Communication">Communication</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Productivity">Productivity</option>
                      <option value="Communication">4th</option>
                    </select>

                    {/* <h3>Options</h3>
                        {question.options.map((option,optionIndex)=>(
                            <div key={optionIndex}>

                            </div>
                        ))} */}

                    <div className="flex items-center justify-center">
                    <Button onClick={() => handleRemoveQuestion(questionIndex)} className="w-1/2">
                      Remove Question
                    </Button>
                    </div>
                  </div>
                ))}
                <button type="button" onClick={handleAddQuestion} className="bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-100">
                  Add Question
                </button>

              </div>
                <button type="submit" className="text-white px-4 py-2 bg-blue-700 mt-4 rounded-lg hover:text-blue-800">Post Survey</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Survey;
