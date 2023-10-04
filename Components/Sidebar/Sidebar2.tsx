'use client'
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import {FaArrowLeft,FaArrowRight} from "react-icons/fa"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext, useState } from "react";
// import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import './styles.css'

const sidebarItems = [
  {
    name: "Feedback",
    href: "/feedback",
    icon: AiOutlineHome,
  },
  {
    name: "Survey",
    href: "/survey",
    icon: BsPeople,
  },
  {
    name: "Overview",
    href: "/overviewy",
    icon: TiContacts,
  },
  // {
  //   name:"Calendar",
  //   href : "/teacher/calendar",
  //   icon: TiContacts
  // }
];

const Sidebar2 = () => {
  const router = useRouter();
//   const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
const [isCollapsed, setCollapse] = useState(true)
  const session = useSession();
  if(session === undefined) return <></>
  return (
    <>
    <style>
    ul.breadcrumb li+li::before {
        content: "\276F";
        padding-left: 8px;
        padding-right: 4px;
        color: inherit;
    }

    ul.breadcrumb li span {
        opacity: 60%;
    }

    #sidebar {
        -webkit-transition: all 300ms cubic-bezier(0, 0.77, 0.58, 1);
        transition: all 300ms cubic-bezier(0, 0.77, 0.58, 1);
    }

    #sidebar.show {
        transform: translateX(0);
    }

    #sidebar ul li a.active {
        background: #1f2937;
        background-color: #1f2937;
    }
</style>
<div id="containerSidebar" className="z-40">
    <div className="navbar-menu relative z-40">
        <nav id="sidebar"
            className="fixed left-0 bottom-0 flex w-3/4 -translate-x-full flex-col overflow-y-auto bg-gray-700 pt-6 pb-8 sm:max-w-xs lg:w-80">
            {/* <!-- one category / navigation group --> */}
            <div className="px-4 pb-6">
                <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                    Main
                </h3>
                <ul className="mb-8 text-sm font-medium">
                    <li>
                        <a className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                            href="#homepage">
                            <span className="select-none">Homepage</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                            href="#link1">
                            <span className="select-none">link1</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* <!-- navigation group end--> */}

            {/* <!-- example copies start --> */}
            <div className="px-4 pb-6">
                <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                    Legal
                </h3>
                <ul className="mb-8 text-sm font-medium">
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                            href="#tc">
                            <span className="select-none">Terms and Condition</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                            href="#privacy">
                            <span className="select-none">Privacy policy</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                            href="#imprint">
                            <span className="select-none">Imprint</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="px-4 pb-6">
                <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                    Others
                </h3>
                <ul className="mb-8 text-sm font-medium">
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                            href="#ex1">
                            <span className="select-none">...</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                            href="#ex2">
                            <span className="select-none">...</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* <!-- example copies end --> */}
        </nav>
    </div>
    <div className="mx-auto lg:ml-80"></div>
</div>
</>
  );
};

export default Sidebar2;