import React, { useState } from "react";
import ContantCard from "./ContantCard";
import ProductMenu from "./ProductMenu";
import SellerPagination from "./SellerPagination";

const Content = () => {
  const contents = [
    {
      img: "https://i.seadn.io/gcs/files/e3bd293c76de96802b981703e6da6544.gif?auto=format&w=512",
      name: "Sicky #1085",
      title: "#E3BD293",
      value: "0.004 ETH",
    },
    {
      img: "https://i.seadn.io/gcs/files/98ee31883e60d1dd65a95c938d0330e4.png?auto=format&w=512",
      name: "Sicky #1085",
      title: "#E3BD293",
      value: "0.004 ETH",
    },
    {
      img: "https://i.seadn.io/gcs/files/e51dba492765a4027c014e29d0d89aa8.png?auto=format&w=512",
      name: "Sicky #1085",
      title: "#E3BD293",
      value: "0.004 ETH",
    },
    {
      img: "https://i.seadn.io/gcs/files/6c9fcf5fa3ebdcee45a7b3b215aa1b43.png?auto=format&w=512",
      name: "Sicky #1085",
      title: "#E3BD293",
      value: "0.004 ETH",
    },
    {
      img: "https://i.seadn.io/gcs/files/6c9fcf5fa3ebdcee45a7b3b215aa1b43.png?auto=format&w=512",
      name: "Sicky #1085",
      title: "#E3BD293",
      value: "0.004 ETH",
    },
    {
      img: "https://i.seadn.io/gcs/files/6c9fcf5fa3ebdcee45a7b3b215aa1b43.png?auto=format&w=512",
      name: "Sicky #1085",
      title: "#E3BD293",
      value: "0.004 ETH",
    },
    {
      img: "https://i.seadn.io/gcs/files/e3bd293c76de96802b981703e6da6544.gif?auto=format&w=512",
      name: "Sicky #1085",
      title: "#E3BD293",
      value: "0.004 ETH",
    },
    {
      img: "https://i.seadn.io/gcs/files/e3bd293c76de96802b981703e6da6544.gif?auto=format&w=512",
      name: "Sicky #1085",
      title: "#E3BD293",
      value: "0.004 ETH",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = contents.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="grid grid-cols-3 gap-4">
      <ProductMenu />

      <div className="col-span-2 ...">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
          {currentPosts.map((content, i) => (
            <ContantCard key={i} content={content} />
          ))}
        </div>
        <div className=" mx-auto text-center mt-5 mb-5 ">
          <SellerPagination
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            totalPosts={contents.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
