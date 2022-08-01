import { configureStore } from "@reduxjs/toolkit";
import busSlice from "./busSlice";

const store = configureStore({
    reducer:{
        booking:busSlice
    }
})
export default store