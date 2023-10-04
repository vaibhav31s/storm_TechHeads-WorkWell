"use client";
import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import {
  AiFillTag,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { data } from "./data.js";
import { useSession, signIn, signOut } from "next-auth/react";
import Form from "../../../Components/Form";

const Employee: React.FC =  () => {
  const session = useSession();

  const datas = async () => {
    try {
      const response = await fetch("/api/form/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.data?.id,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.error("Failed to fetch data:", response.status);
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
      throw error;
    }
  };
  const [formData, setFormData] = useState<any>();
  
  const fetchData = async () => {
    try {
      const result = await datas();
      setFormData(result);
      console.log(formData)
      // Now you can use 'result' here
    } catch (error) {
      // Handle errors here
    }
    
  };
 React.useEffect(()=>{
  fetchData(); 
 },[])// Call the fetchData function to initiate the data fetching



  // Bulk attendance

  /* Filters */
  const [foods, setFoods] = useState(data);
  const filterType = (category: string) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const [nav, setNav] = useState(false);
  const [formIIID, setFormIIID] = useState<any>();
  // Modal using CSS
  const [showModal, setShowModal] = useState(false);


  return (
    <div className="flex justify-between">
      <div className="hidden lg:flex lg:w-1/5">
        {/* Side drawer menu */}

        <div
          className={
            "dark:bg-black dark:text-white top-0 left-0 w-[200px] h-screen bg-white border-r-4"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <div className="flex items-center p-4 border-b border-purple-800">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center mr-3">
              <span>U</span>
            </div>
            <div>
              <div className="font-semibold">User Name</div>
              <div className="text-sm">user@example.com</div>
            </div>
          </div>
          <nav>
            <ul className="dark:text-white flex flex-col p-4 text-gray-800">
              <li
                onClick={() => setFoods(data)}
                className="text-xl py-4 flex"
              >
                <BsFillSaveFill size={25} className="mr-4" />
                All
              </li>
              <li
                onClick={() => filterType("Survey Form")}
                className="text-xl py-4 flex"
              >
                <TbTruckDelivery size={25} className="mr-4" /> Survey Forms
              </li>
              <li
                onClick={() => filterType("Feedback")}
                className="text-xl py-4 flex"
              >
                <MdFavorite size={25} className="mr-4" /> Feedbacks
              </li>
              <li
                onClick={() => filterType("Reward")}
                className="text-xl py-4 flex"
              >
                <FaWallet size={25} className="mr-4" /> Rewards
              </li>
              <li className="text-xl py-4 flex">
                <MdHelp size={25} className="mr-4" /> Help
              </li>
              <li className="text-xl py-4 flex">
                <AiFillTag size={25} className="mr-4" /> Promotions
              </li>
              <li className="text-xl py-4 flex">
                <BsFillSaveFill size={25} className="mr-4" /> Best Ones
              </li>
              <li className="text-xl py-4 flex">
                <FaUserFriends size={25} className="mr-4" /> Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>



      <div className="max-w-[1640px] sm:w-full w-4/5 mx-auto">
        {/* Forms */}
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
          {/* Card */}
          {formData && formData.forms && formData.forms.map((item, index) => (
            <div className="rounded-xl relative">
              

              {/* Overlay */}
              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">{item.title}</p>
                <p className="px-2">{item.name}</p>

                <button
                  className="absolute bottom-4  m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    setShowModal(true);
                    setFormIIID(item.id);
                  }}
                >
                  Fill Form
                </button>

                <button className="absolute bottom-4 m-2 right-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Earn 50 coins <span className="text-sm">+</span>
                </button>

              </div>
             
              <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src="https://images.pexels.com/photos/955392/pexels-photo-955392.jpeg?auto=compress&cs=tinysrgb&w=600"
              />

               {showModal && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white dark:bg-black p-4 rounded shadow-lg">
                <div className="flex justify-end">
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    &times;
                  </button>
                </div>
                <Form formId = {formIIID} model = {setShowModal} />
              </div>
            </div>
          )}
            </div>


          ))}
          {/* Card */}

          
        </div>
      </div>
    </div>
  );
};

export default Employee;