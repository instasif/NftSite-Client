import React from 'react';
import hero from "../../assets/img/hero.png";

// bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)]

// sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25 bg-white/75

const Hero = () => {
    return (
      <section
        style={{ backgroundImage: `url(${hero})` }}
        className="relative bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0   "></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
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
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Hero;