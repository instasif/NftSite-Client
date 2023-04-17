import React from "react";
import NftPlacement from "./NftPlacement";
import Details from "./Details";
import Description from "./Description";
import { useParams } from "react-router-dom";
import { useProductByIdQuery } from "../../app/features/Products/productsApi";
import Loading from "../../shared/Loading/Loading";

const NftDetails = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useProductByIdQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    return (
      <section>
        <NftPlacement data={data} />
        <Details data={data} />
        <Description data={data} />
      </section>
    );
  }
};

export default NftDetails;
