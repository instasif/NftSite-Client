import React from "react";
import { SiScipy } from "react-icons/si";
import { GiSpiderWeb } from "react-icons/gi";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { AiOutlineShareAlt, AiTwotoneStar } from "react-icons/ai";
import MidHead from "./MidHead";
import Content from "./Content";

import MidNavbar from "./MidNavbar";

const DataDescription = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between mt-10">
        <div>
          <h1 className="text-3xl font-bold text-white ">The Sicky Official</h1>
        </div>
        <div className="flex   ">
          <SiScipy className=" me-4 text-2xl font-bold" />
          <GiSpiderWeb className=" me-4 text-2xl font-bold" />
          <BsDiscord className=" me-4 text-2xl font-bold" />
          <BsTwitter className=" me-4 text-2xl font-bold" />
          <div className="divider lg:divider-horizontal"></div>
          <AiTwotoneStar className=" me-3 text-2xl font-bold" />
          <AiOutlineShareAlt className=" me-3 text-2xl font-bold" />
          <HiDotsCircleHorizontal className=" me-3 text-2xl font-bold" />
        </div>
      </div>
      <p className="">
        <p className="text-xl">
          Items 1,931 · Created Apr 2023 · Creator earnings 4.7% · Chain
          Ethereum ·
        </p>{" "}
        <br /> Category Art Sicky is a project developed by 1933studios,
        combining the nostalgic appeal of classic animated cartoons with various
        games on the ETH chain. At Sicky, we aim to create a platform where
        users can participate in various money games, earn rewards, and engage
        in community-driven events while enjoying the nostalgic feel of classic
        animation.
      </p>

      <div className="mt-10 flex ">
        <div className="me-5">
          <h1 className="text-2xl font-bold text-black">20 ETH</h1>
          <p className="text-gray-400 ">total volume</p>
        </div>
        <div className="me-5">
          <h1 className="text-2xl font-bold text-black">0.0035 ETH</h1>
          <p className="text-gray-400 ">floor price</p>
        </div>
        <div className="me-5">
          <h1 className="text-2xl font-bold text-black">20 %</h1>
          <p className="text-gray-400 ">best</p>
        </div>
        <div className="me-5">
          <h1 className="text-2xl font-bold text-black">0.0045 WETH</h1>
          <p className="text-gray-400 ">best offer</p>
        </div>
        <div className="me-5">
          <h1 className="text-2xl font-bold text-black">18%</h1>
          <p className="text-gray-400 ">limit</p>
        </div>
        <div className="me-5">
          <h1 className="text-2xl font-bold text-black">20 ETH</h1>
          <p className="text-gray-400 ">flor price</p>
        </div>
      </div>
      <MidNavbar />
      <MidHead />
      <Content />
    </div>
  );
};

export default DataDescription;
