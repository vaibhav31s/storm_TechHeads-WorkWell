'use client'
import React from "react";
import { ImPlay,ImInstagram,ImGooglePlus2,ImLinkedin} from "react-icons/im";


export default function Footer() {
  return (
    <>
      <footer className="relative dark:bg-blueGray-800 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl dark:text-white font-semibold">Bringing you the latest and the best onnn  .</h4>
              <h5 className="text-lg dark:text-gray-200  mt-0 mb-2 text-blueGray-400">
                Follow us on any of these platforms, we provide you with exicited daily news and new upgraded product .
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-9  h-12 mb-6 shadow-lg rounded-full bg-white"
                  type="button"
                >
                  <ImPlay className="w-8 "></ImPlay>
                </button>
                <button
                  className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-9  h-12 mb-6 shadow-lg rounded-full bg-white"
                  type="button"
                >
                <ImInstagram className="w-36"></ImInstagram>
                </button>
                <button
                  className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-9 h-12 mb-6 shadow-lg rounded-full bg-white"
                  type="button"
                >
                 <ImGooglePlus2 className="w-36"></ImGooglePlus2>
                </button>
                <button
                  className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-9  h-12 mb-6 shadow-lg rounded-full bg-white"
                  type="button"
                >
                  <ImLinkedin className="w-36"></ImLinkedin>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase dark:text-gray-300 text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 dark:text-gray-300  hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 dark:text-gray-300  hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600  dark:text-gray-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/OmkarBhostekar/mini-project-sem-5"
                      >
                        Github
                      </a>
                    </li>
                    {/* <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        Free Products
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase dark:text-gray-300  text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    {/* <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=nr-footer"
                      >
                        Terms & Conditions
                      </a>
                    </li> */}
                    <li>
                      <a
                        className="text-blueGray-600 dark:text-gray-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=nr-footer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 dark:text-gray-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=nr-footer"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 dark:text-gray-300 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Team 7 by{" "}
                <a
                  href="#"
                  className="text-blueGray-500 dark:text-gray-300  hover:text-blueGray-800"
                >
                  Vaibhav, Sagar, Ritesh, Jenil
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}