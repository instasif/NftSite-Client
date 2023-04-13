import React from "react";
import { MdVerified } from "react-icons/md";

const TopSeller = ({ Seller }) => {
  const { icon, name, content } = Seller;
  return (
    <div className="mx-auto w-32">
      {/*  <RiCheckboxBlankCircleLine
        className="mb-[-16px]  me-[-4px] float-right text-3xl text-blue-700 
     "
      /> */}
      <MdVerified
        className="mb-[-16px]  me-[-4px] float-right text-3xl text-blue-700 
     "
      />
      <img
        src={icon}
        alt=""
        srcset=""
        className="w-full bg-gray-400  mt-[-28px] h-28  col-span-2 row-span-2 rounded-lg shadow-lg min-h-96 md:col-start-3 md:row-start-1  aspect-square"
      />{" "}
      <h3 className="text-xl text-gray-900 font-semibold mt-2"> {name}</h3>
      <p className="text-gray-400">{content} </p>
    </div>
  );
};

export default TopSeller;
