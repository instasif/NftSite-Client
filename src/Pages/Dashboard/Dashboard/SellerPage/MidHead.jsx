import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { TbBoxPadding } from "react-icons/tb";
import { CgToolbox } from "react-icons/cg";

const MidHead = () => {
  return (
    <div className="mt-14 flex text-center items-center me-5">
      <div className="flex me-5">
        {" "}
        <p className="flex items-center">
          <span className="indicator-item indicator-start badge badge-green-500 me-2"></span>
          <p>Live</p>
        </p>
      </div>
      <div className="me-5">
        <p className="text-gray-400">388 results</p>
      </div>
      <div className="me-5">
        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className="  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border-2 border-gray-300  "
        >
          Price low to high
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          id="dropdownHover"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="me-5">
        <input
          type="text"
          className="w-full focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center border-2 border-gray-300 px-56"
          placeholder="enter text"
        />
      </div>
      <div className="">
        <div className="   font-medium rounded-lg text-sm  py-2 text-center justify-around inline-flex items-center border-2 border-gray-300 w-60">
          <AiOutlineBars className="text-3xl font-bold me-2 border-4 " />
          <BsReverseLayoutTextSidebarReverse className="text-3xl font-bold me-2 border-4 " />
          <TbBoxPadding className="text-3xl font-bold me-2 border-4 " />
          <CgToolbox className="text-3xl font-bold me-2 border-4 " />{" "}
          <BsReverseLayoutTextSidebarReverse className="text-3xl font-bold  border-4 " />
        </div>
      </div>
    </div>
  );
};

export default MidHead;
