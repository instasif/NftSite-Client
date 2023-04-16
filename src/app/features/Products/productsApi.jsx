import apiSlice from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: '/all-nfts'
            })
        }),
        uploadNft: builder.mutation({
            query: (product) => ({
                url: '/uploadNft',
                method: 'POST',
                body: product
            })
        })
    })
})

export const { useGetProductsQuery, useUploadNftMutation } = productsApi;