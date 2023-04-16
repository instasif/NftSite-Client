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
        }),
        productById: builder.query({
            query: (id) => ({
                url: `/nft/${id}`
            })
        })
    })
})

export const { useGetProductsQuery, useUploadNftMutation, useProductByIdQuery } = productsApi;