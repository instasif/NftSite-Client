import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nft-site-server.vercel.app",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({}),
});


export default apiSlice;