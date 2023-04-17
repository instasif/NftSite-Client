import React from "react";
import { useSelector } from "react-redux";
import { useGetProductsByEmailQuery } from "../../app/features/Products/productsApi";
import TodayPicCard from "../../Componants/TodaysPic/TodayPicCard";
import Loading from "../../shared/Loading/Loading";

const Test = () => {
  const { email } = useSelector((state) => state.auth.user)
  const { data, isLoading, isSuccess } = useGetProductsByEmailQuery(email)
  console.log(data)

  if (isLoading) {
    return <Loading />
  }
  // if (!data?.lenght) {
  //   return <h1 className="font-semibold">Please Upload a NFT</h1>
  // }


  if (isSuccess) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
          data.map(product => <TodayPicCard key={product._id} product={product}></TodayPicCard>)
        }
      </div>
    )
  }



};

export default Test;
