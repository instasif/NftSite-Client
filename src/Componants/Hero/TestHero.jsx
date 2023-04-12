import React from 'react';
import monkey from '../../assets/img/monkey.png'
import hero from "../../assets/img/hero.png";
import { Link } from 'react-router-dom';

// sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25 bg-black/75

const TestHero = () => {
    return (
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={hero}
            alt="Hero Banner Background"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25 bg-black/75 opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="flex justify-between flex-auto items-center">
            <div className="max-w-xl text-center sm:text-left ms-4 -mb-86">
              <div className="text-white text-4xl">
                <p>Discover,find,sell,</p>
                <p className="m-3">Eextraordinary</p>
                <div className="flex gap-2 m-4 text-4xl">
                  <p> Monster</p> <strong>NFTs</strong>
                </div>
              </div>

              <div className="text-white mt-4 max-w-lg sm:leading-relaxed">
                <p>Marketplace for Monster Character Non Fungible</p>
                <p>Token NFTs.</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <Link className="block w-full rounded-full bg-blue-950 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-950 sm:w-auto">
                  Explore
                </Link>

                <Link className="block w-full rounded-full bg-black px-10 py-3 text-sm font-medium text-white shadow hover:text-white focus:ring active:text-white sm:w-auto border-2 border-white">
                  Create
                </Link>
              </div>
            </div>

            <div className="hidden md:block lg:block">
              <img
                src={monkey}
                alt="nft monkey"
                className="lg:mb-[-130px] md:mb-[-128px]"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default TestHero;

//mb-2 md:mb-[-167px] lg:mb-[-68px] hidden lg:block md:block