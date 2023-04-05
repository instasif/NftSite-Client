import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto mt-6 h-[7cm] bg-gray-200">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              i-NFT Bazar
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              My Account
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Aothors
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Author Profile
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Create Item
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Resources
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Help & Support
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Live Auction
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Team Details
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Activity
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold tracking-wide text-gray-800">Company</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <span className="text-base font-medium text-gray-800">
              SUBSCRIBE US
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              {/* <input
                placeholder="info@yourgmail.com"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded-md shadow-sm appearance-none  md:mb-0  "
              /> */}
              {/* <HiArrowNarrowRight className="text-3xl justify-center bg-blue-400 h-11 rounded-sm " /> */}
            </form>
            <div className="flex items-center pb-10 space-x-4 sm:mt-0 cursor-pointer">
              <BsFacebook className="text-3xl text-gray-700 mt-4" />
              <BsWhatsapp className="text-3xl text-green-500 mt-4" />
              <BsTwitter className="text-3xl text-blue-700 mt-4" />
              <BsTelegram className="text-3xl text-blue-500 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
