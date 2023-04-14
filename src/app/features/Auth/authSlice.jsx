import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import auth from "../../../firebase/firebase.config"
import { toast } from "react-hot-toast";
const initialState = {
    user: { name: "", email: "", role: "" },
    isLoading: false,
    isError: false,
    error: "",

}

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    return data.user.email;
});

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
    return data.user.email;
});

export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider)
    return data.user;
});
export const getUserByEmail = createAsyncThunk("auth/getUserByEmail", async (email) => {
    const res = await fetch(`http://localhost:5000/users/${email}`)
    const data = await res.json();
    return data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userSignOut: (state) => {
            state.user.name = "";
            state.user.email = "";
        },
        setUser: (state, { payload }) => {
            state.user = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = "";
        })
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.user.email = payload;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.user.name = "";
                state.user.email = "";
                toast.error(action.error.message)
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";

            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.user.email = payload;
                toast.success("Log In Success")
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.user.name = "";
                state.user.email = "";
                toast.error(action.error.message)
            })
            .addCase(googleLogin.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(googleLogin.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.user.name = payload.payload.displayName;
                state.user.email = payload.payload.email;
            })
            .addCase(googleLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.user.name = "";
                state.user.email = "";
            })
            .addCase(getUserByEmail.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(getUserByEmail.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.user = payload;
            })
            .addCase(getUserByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.user.name = "";
                state.user.email = "";
            })
    }
})

export const { userSignOut, setUser } = authSlice.actions

export default authSlice.reducer;