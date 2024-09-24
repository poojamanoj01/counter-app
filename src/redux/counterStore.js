import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// create store
const counterStore =  configureStore({
    reducer:{
        counterReducer : counterSlice
    }

})

export default counterStore