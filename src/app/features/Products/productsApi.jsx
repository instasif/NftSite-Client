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
            }),
            invalidatesTags: ['Nfts']
        }),
        productById: builder.query({
            query: (id) => ({
                url: `/nft/${id}`
            })
        }),
        getProductsByEmail: builder.query({
            query: (email) => ({
                url: `/nftsByUser/${email}`
            }),
            providesTags: ['Nfts']
        })
    })
})

export const { useGetProductsQuery, useUploadNftMutation, useProductByIdQuery, useGetProductsByEmailQuery } = productsApi;