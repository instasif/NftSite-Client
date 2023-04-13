import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authSlice from './features/Auth/authSlice';
import apiSlice from './features/api/apiSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;