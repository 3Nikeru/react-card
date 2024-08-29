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
})
console.log(cardSlice);

export default cardSlice.reducer
