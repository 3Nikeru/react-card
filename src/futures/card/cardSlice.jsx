import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import cardItems from '../../cardItems';

const initialState = {
    cardItems: cardItems,
    amount: 0,
    total: 0,
    isLoading: true
}
const cardSlice = createSlice({
    name: "card",
    initialState,
    removeItem: (state, action)=>{
        const itemId = action.payload;
        state.cardItems = state.cardItems.filter(item => item.id !== itemId);
    }
})
console.log(cardSlice);
export const {removeItem} = cardSlice.actions
export default cardSlice.reducer
