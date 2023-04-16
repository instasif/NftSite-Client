import React from "react";

const UploadNftForm = () => {
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Upload Nft
        </h1>

        <form
          // onSubmit={submit}
          action=""
          className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <label
            htmlFor="UserCollectionName"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserCollectionName"
              name="collectionName"
              required
              placeholder="Collection Name"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Collection Name
            </span>
          </label>

          <label
            htmlFor="UserBio"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserBio"
              name="bio"
              required
              placeholder="Bio"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Bio
            </span>
          </label>

          <label
            htmlFor="UserChain"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserChain"
              required
              name="chain"
              placeholder="Chain"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Chain
            </span>
          </label>

          <div>
            <label htmlFor="image" className="block mb-2 text-sm">
              Cover Photo:
            </label>
            <input
              required
              type="file"
              id="image"
              name="coverPhoto"
              accept="image/*"
            />
          </div>

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

export default UploadNftForm;
