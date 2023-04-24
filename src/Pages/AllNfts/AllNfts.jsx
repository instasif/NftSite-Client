import React from "react";
import { useGetProductsQuery } from "../../app/features/Products/productsApi";
import TodayPicCard from "../../Componants/TodaysPic/TodayPicCard";
import Loading from "../../shared/Loading/Loading";

const AllNfts = () => {
  const { data, isLoading } = useGetProductsQuery();
  const products = data || [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="py-16 max-w-7xl mx-auto ">
        <h1 className="text-center font-semibold text-3xl my-5">All Nfts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5">
          {/* {
            products.filter(nft => nft.name.toLowerCase().includes(search)).map((product) => (
            <TodayPicCard key={product._id} product={product}></TodayPicCard>
          ))
          } */}
          {products.map((product) => (
            <TodayPicCard key={product._id} product={product}></TodayPicCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllNfts;
