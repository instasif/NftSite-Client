import React from "react";

const CreateAndSellYourNFT = ({ NFT }) => {
  const { image, name, description } = NFT;
  return (
    <div className="float-left px-4 py-2 shadow-md mx-auto  rounded-md bg-slate-50 w-56 ">
      <div>
        <img
          src={image}
          alt="NFT"
          srcset=""
          className="float-left inline-block  w-20 h-20 mb-3 "
        />
      </div>
      <br />
      <h3 className="text-xl float-left  mb-3 text-gray-800 font-bold">
        {name}{" "}
      </h3>
      <p className="text-gray-500 float-left"> {description} </p>
    </div>
  );
};

export default CreateAndSellYourNFT;
