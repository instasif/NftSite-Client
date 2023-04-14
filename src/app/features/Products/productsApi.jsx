import apiSlice from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: '/all-nfts'
            })
        })
    })
})

export const { useGetProductsQuery } = productsApi;