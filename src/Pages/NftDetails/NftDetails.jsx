import React from "react";
import NftPlacement from "./NftPlacement";
import Details from "./Details";
import Description from "./Description";
import { useParams } from "react-router-dom";
import { useProductByIdQuery } from "../../app/features/Products/productsApi";

const NftDetails = () => {
  const { id } = useParams();
  const { data } = useProductByIdQuery(id)
  console.log(data)
  return (
    <section>
      <NftPlacement />
      <Details />
      <Description />
    </section>
  );
};

export default NftDetails;
