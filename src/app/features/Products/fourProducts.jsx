import apiSlice from "../api/apiSlice";

const fourProducts = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFourProducts: builder.query({
      query: () => ({
        url: "/nfts",
      }),
    }),
  }),
});

export const { useGetFourProductsQuery } = fourProducts;