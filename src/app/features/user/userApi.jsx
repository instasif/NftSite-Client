import apiSlice from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user) => ({
                method: 'POST',
                url: '/user',
                body: user
            }),
        }),
    }),
});

export const { useRegisterMutation } = userApi;