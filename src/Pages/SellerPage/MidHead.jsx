import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { TbBoxPadding } from "react-icons/tb";
import { CgToolbox } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
const MidHead = () => {
  return (
    <div className="mt-14 flex text-center items-center me-5">
      <div className="flex me-5">
        <p className="flex items-center">
          <span className="indicator-item indicator-start badge badge-green-500 me-2"></span>
          <p>Live</p>
        </p>
      </div>
      <div className="me-5">
        <p className="text-gray-400">388 results</p>
      </div>
      <div
        tabIndex={0}
        className="dropdown dropdown-end flex justify-between  hover:bg-gray-200  p-2 border-2 border-spacing-0 rounded-lg me-3"
      >
        <div>
          <h1 className="text-black ">Price high to low</h1>
        </div>

        <div>
          <RiArrowDropDownLine tabIndex={0} className="text-3xl font-bold " />
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>High</a>
          </li>
          <li>
            <a>Low</a>
          </li>
        </ul>
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
