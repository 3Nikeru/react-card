import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    cardItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}
const cardSlice = createSlice({
    name: "card",
    initialState
})
console.log(cardSlice);

export default cardSlice.reducer
