import React from "react";

const SellerPagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  console.log(postsPerPage, totalPosts, paginate, currentPage);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="flex justify-center mb-10">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={` ${
                currentPage === number
                  ? "bg-gray-500 text-white me-3"
                  : "bg-white text-gray-700 me-3"
              } border-2 p-2 rounded-md hover:bg-gray-200 hover:text-gray-900 font-medium py-2 px-4`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SellerPagination;
