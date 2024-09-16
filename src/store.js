import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./futures/card/cardSlice";
import modalReducer from "./futures/modal/modalSlice"

export const store = configureStore({
    reducer:{
        card: cardReducer,
        modal: modalReducer,
    }
})