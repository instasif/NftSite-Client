import React from "react";

const MidNavbar = () => {
  return (
    <div className="flex items-center mt-10 text-black font-semibold">
      <a
        rel="noopener noreferrer"
        href="/#"
        className="px-5 py-1 border-b-4 border-black text-2xl font-bold"
      >
        Items
      </a>
      <a
        rel="noopener noreferrer"
        href="/#"
        className="px-5 py-1  dark:border-gray-700"
      >
        Offer
      </a>
      <a
        rel="noopener noreferrer"
        href="/#"
        className="px-5 py-1  dark:border-gray-700"
      >
        analytics
      </a>
      <a
        rel="noopener noreferrer"
        href="/#"
        className="px-5 py-1  dark:border-gray-700"
      >
        Activity
      </a>
    </div>
  );
};

export default MidNavbar;
