import React from "react";
import { MdVerified } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { RiShareFill } from "react-icons/ri";
import { MdReport } from "react-icons/md";
import { SiOpensea } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NftPlacement = ({ data }) => {
  const { name, image, priceETH, priceUSD, _id } = data;
  return (
    <div className=" mx-auto max-w-screen-xl px-4 pt-28 pb-8">
      <div className="grid grid-cols-1 items-start md:grid-cols-2">
        <div className="">
          <img
            alt="Les Paul"
            src={image}
            className="aspect-square w-[60%] mx-16 rounded-xl object-cover"
          />
        </div>

        <div className="sticky top-0">
          <div className="mt-8 flex justify-between">
            <div className="max-w-[35ch] space-y-2">
              <p className="text-sm font-bold sm:text-sm text-yellow-500 flex align-content-center">
                <strong>Seller Id Name</strong>{" "}
                <MdVerified className="text-sm text-blue-500" />
              </p>

              <h2 className="text-4xl">{name}</h2>
              <div className="flex gap-1">
                <small>Listed From</small>
                <SiOpensea className="text-blue-500" />
              </div>
            </div>

            <div className="text-lg font-bold">
              <div className="flex align-content-center gap-4 text-slate-500">
                <div className="flex align-content-center justify-items-center hover:text-black">
                  <AiFillHeart className="cursor-pointer" />
                  <small className="text-sm text-justify">10</small>
                </div>
                <RiShareFill className="cursor-pointer hover:text-black" />
                <MdReport className="cursor-pointer hover:text-black" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <small className="text-slate-500">Price</small>

            <div className="">
              <h1 className="text-2xl">
                {priceETH} ETH{" "}
                <small className="text-slate-500">≈ {priceUSD} USD</small>
              </h1>
              <p className="flex text-slate-500">
                <FiArrowUpRight className="text-xl text-green-600" /> 0% above
                the floor price{" "}
                <span className="text-black ms-1">{priceETH} ETH</span>
              </p>
            </div>
          </div>

          <Link to={`/payment/${_id}`}><button className="bg-yellow-300 w-[35%] h-[50px] rounded mt-8">
            Buy Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default NftPlacement;
