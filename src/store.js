import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./futures/card/cardSlice"

export const store = configureStore({
    reducer:{
        card: cardReducer
    }
})