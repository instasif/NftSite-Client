import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nft-site-server-instasif.vercel.app",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  tagTypes: ["Nfts"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
