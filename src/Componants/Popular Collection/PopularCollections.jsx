import React from "react";
import PopularCollection from "./PopularCollection";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const PopularCollections = () => {
  return (
    <div className="max-w-7xl my-10 mx-5">
      <div className="flex justify-between items-center mx-16">
        <h3 className="text-2xl font-bold">Popular Collection</h3>
        <div className="flex justify-center items-center text-indigo-600">
          <h3 className="text-sm font-bold">EXPLORE MORE</h3>
          <span className="mx-2">
            {" "}
            <AiFillCaretRight />
          </span>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 my-10 mx-12 cursor-pointer">
        <Link to={"/sellerCollection"}>
          <PopularCollection />
        </Link>
        <Link to={"/sellerCollection"}>
          <PopularCollection />
        </Link>
        <Link to={"/sellerCollection"}>
          <PopularCollection />
        </Link>
        <Link to={"/sellerCollection"}>
          <PopularCollection />
        </Link>
      </div>
    </div>
  );
};

export default PopularCollections;
