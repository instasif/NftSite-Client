import React from "react";
import CreateAndSellYourNFT from "./CreateAndSellYourNFT";

const CreateAndSellYourNFTs = () => {
  const creteNFTs = [
    {
      image: "https://freeiconshop.com/wp-content/uploads/edd/wallet-flat.png",
      name: "Setup Your Wallet",
      description:
        "A digital wallet (or electronic wallet) is a financial transaction application that runs on any connected device.",
    },
    {
      image:
        "https://www.clipartmax.com/png/full/435-4355023_data-collection-icon-assessment-purple.png",
      name: "Create Your Collection",
      description:
        "A digital wallet (or electronic wallet) is a financial transaction application that runs on any connected device.",
    },
    {
      image:
        "https://w7.pngwing.com/pngs/292/680/png-transparent-add-person-add-person-icon-thumbnail.png",
      name: "Add Your NFT’S",
      description:
        "A digital wallet (or electronic wallet) is a financial transaction application that runs on any connected device.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1950/1950715.png",
      name: "List For Sale",
      description:
        "A digital wallet (or electronic wallet) is a financial transaction application that runs on any connected device.",
    },
  ];
  return (
    <div className="max-w-7xl my-14 mx-10">
      <div className="items-center mx-16">
        <h3 className="text-2xl mx-auto mt-6 mb-6 font-bold">
          Create and Sell Your NFT
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {creteNFTs.map((NFT, i) => (
          <CreateAndSellYourNFT key={i} NFT={NFT} />
        ))}
      </div>
    </div>
  );
};

export default CreateAndSellYourNFTs;
