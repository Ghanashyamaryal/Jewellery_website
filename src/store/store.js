import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../productslice/producSlice";
export const store = configureStore({
    reducer:{
        cart:productReducer
    }
})