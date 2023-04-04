import React from "react";
import TopSeller from "./TopSeller";

const TopSellers = () => {
  const TopSellers = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/5231/5231020.png",
      name: "user-pictures",
      content: "2rtv5f",
    },

    {
      icon: "https://cdn-icons-png.flaticon.com/512/3884/3884891.png",
      name: "user-pictures",
      content: "2rtv5f",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2990/2990662.png",
      name: "user-pictures",
      content: "2rtv5f",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3884/3884891.png",
      name: "user-pictures",
      content: "2rtv5f",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/5231/5231020.png",
      name: "user-pictures",
      content: "2rtv5f",
    },

    {
      icon: "https://cdn-icons-png.flaticon.com/512/3884/3884891.png",
      name: "user-pictures",
      content: "2rtv5f",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2990/2990662.png",
      name: "user-pictures",
      content: "2rtv5f",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3884/3884891.png",
      name: "user-pictures",
      content: "2rtv5f",
    },
  ];
  return (
    <div className="max-w-7xl my-10 mx-5">
      <div className="flex justify-between items-center mx-16">
        <h3 className="text-2xl font-bold">Top Seller</h3>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 my-10 mx-12">
        {TopSellers.map((Seller, i) => (
          <TopSeller Seller={Seller} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
