import { useState } from "react";

import img from "./../../Images/logo.svg";

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { FcTodoList } from "react-icons/fc";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import { FcClock } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
function Header() {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [side, setSideBar] = useState(0);

  function handleSidebar() {
    if (side === 0) {
      setSideBar("full");
    } else if (side === "full") {
      setSideBar(0);
    }
  }

  return (
    <header className="flex justify-between items-center w-[100%] px-[5%]">
      <div className="flex items-center py-5 ">
        <div>
          <img src={img} alt="snap" />
        </div>
        <div
          className={`ml-10 sm:absolute sm:h-full sm:w-${side} sm:overflow-hidden sm:right-0 sm:bg-[rgba(0,0,0,.5)] sm:top-0`}
        >
          <ul className="flex items-center gap-6 select-none sm:w-[50%] sm:px-4 sm:bg-white sm:ml-[50%] sm:flex-col sm:h-full sm:items-start sm:py-10 sm:gap-2">
            <ImCross
              className="self-end text-2xl -mt-4 cursor-pointer hidden sm:block"
              onClick={handleSidebar}
            />
            <li className="flex relative gap-2 items-center sm:items-start sm:flex-col cursor-pointer">
              <p className="flex items-center gap-2 sm:left-2">
                Features{" "}
                {openFeatures ? (
                  <BsChevronUp onClick={() => setOpenFeatures(!openFeatures)} />
                ) : (
                  <BsChevronDown
                    onClick={() => setOpenFeatures(!openFeatures)}
                  />
                )}
              </p>

              {openFeatures ? (
                <ul className="absolute -left-3 p-2 sm:p-0 sm:ml-8 sm:relative sm:top-1 top-6">
                  <li className="my-2 flex w-40 gap-2 items-center text-slate-500">
                    <FcTodoList className="text-indigo-600" /> Todo List
                  </li>
                  <li className="my-2 flex w-40 gap-2 items-center text-slate-500">
                    <BsFillCalendar2CheckFill className="text-sky-400" />{" "}
                    Calendar
                  </li>
                  <li className="my-2 flex w-40 gap-2 items-center text-slate-500">
                    <AiFillBell className="text-yellow-400" /> Todo List
                  </li>
                  <li className="my-2 flex w-40 gap-2 items-center text-slate-500">
                    <FcClock /> Planning
                  </li>
                </ul>
              ) : null}
            </li>
            <li className="flex gap-2 relative items-center sm:flex-col cursor-pointer sm:items-start">
              <p className="flex items-center gap-2">
                Company{" "}
                {openCompany ? (
                  <BsChevronUp onClick={() => setOpenCompany(!openCompany)} />
                ) : (
                  <BsChevronDown onClick={() => setOpenCompany(!openCompany)} />
                )}
              </p>
              {openCompany ? (
                <ul className="absolute -left-3 sm:relative p-2 top-6 sm:py-0 sm:ml-8 sm:top-0">
                  <li className="text-slate-500 my-2">History</li>
                  <li className="text-slate-500 my-2">Our Team</li>
                  <li className="text-slate-500 my-2">Blog</li>
                </ul>
              ) : null}
            </li>
            <li className="flex text-slate-500 pointer-events-none gap-2 items-center cursor-pointer">
              Careers
            </li>
            <li className="flex gap-2 items-center cursor-pointer">About</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-3 items-center sm:hidden">
        <button>Login</button>
        <button className="border px-2 py-1 rounded-lg h-max border-slate-500">
          Register
        </button>
      </div>
      <GiHamburgerMenu
        className="text-2xl cursor-pointer hidden sm:block"
        onClick={handleSidebar}
      />
    </header>
  );
}

export default Header;
