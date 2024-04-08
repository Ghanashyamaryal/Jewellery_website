import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./producSlice";
import logSlice from "./logSlice";
export const store = configureStore({
    reducer:{
        cart:productReducer,
        auth :logSlice
    }
})