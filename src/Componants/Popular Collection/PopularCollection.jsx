import React from "react";
import { GiRoyalLove } from "react-icons/gi";
const PopularCollection = () => {
  return (
    <div className="container flex flex-col w-full max-w-lg p-3  divide-y rounded-md divide-gray-700 dark:bg-yellow-50 dark:text-gray-100 mx-auto ">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="text-xs text-gray-400">Leroy Jenkins</h4>
            <span className=" font-bold dark:text-gray-600">Leroy Jenkins</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 dark:text-yellow-500">
          <GiRoyalLove className=" " />
        </div>
      </div>

      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://source.unsplash.com/random/301x301/"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm  dark:bg-gray-500 min-h-48  "
          src="https://source.unsplash.com/random/200x200/?0"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm  dark:bg-gray-500 min-h-48  "
          src="https://source.unsplash.com/random/200x200/?0"
        />

        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?2"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?3"
        />
      </div>
    </div>
  );
};

export default PopularCollection;
