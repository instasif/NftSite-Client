import React from 'react';

const SellerForm = () => {
    return (
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Become A Nft Seller
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Write down bellow your all information:
          </p>

          <form
            action=""
            className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            {/* <p className=" text-lg font-medium"></p> */}

            <label
              for="UserCollectionName"
              class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="UserCollectionName"
                name="collectionName"
                placeholder="Collection Name"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Collection Name
              </span>
            </label>

            <label
              for="UserBio"
              class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="UserBio"
                name="bio"
                placeholder="Bio"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Bio
              </span>
            </label>

            <label
              for="UserCoverPhoto"
              class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="UserCoverPhoto"
                name="coverPhoto"
                placeholder="Cover Photo"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Cover Photo
              </span>
            </label>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Become a Seller
            </button>
          </form>
        </div>
      </div>
    );
};

export default SellerForm;