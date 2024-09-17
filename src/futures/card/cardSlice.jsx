import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import cardItems from '../../cardItems';
import axios from 'axios';

const url = 'https://raw.githubusercontent.com/3Nikeru/react-card/main/data/react-card.json';

const initialState = {
    cardItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}

export const getCardItems = createAsyncThunk("card/getCardItems", async(_, thunkAPI) => {
    try {
        const response = await axios(url);
        // console.log(response.data)
        // console.log(thunkAPI.getState());
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Something went wrong :(')
    }
})
const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        removeItem: (state, action)=>{
            const itemId = action.payload;
            state.cardItems = state.cardItems.filter(item => item.id !== itemId);
        },
        increase: (state, {payload})=>{
            const cardItem = state.cardItems.find(item => item.id == payload);
            console.log(payload);
            cardItem.amount = cardItem.amount + 1;
        },
        decrease: (state, {payload})=>{
            const cardItem = state.cardItems.find(item => item.id === payload);
            cardItem.amount = cardItem.amount - 1;
        },
        clearCard: state => {
            state.cardItems = [];
        },
        calculateTotals: state => {
            let amount = 0;
            let total = 0;
            state.cardItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
        extraReducers: (builder) => {
            builder.addCase(getCardItems.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCardItems.fulfilled, (state, action) => {
                state.isLoading = false
                state.cardItems = action.payload
                console.log(cardItems);
                
            })
            .addCase(getCardItems.rejected, (state) => {
                state.isLoading = false
            })
        }
    }
})
// console.log(cardSlice.actions);
export const {removeItem, increase, decrease, clearCard, calculateTotals} = cardSlice.actions
export default cardSlice.reducer //хочу передать редьюсер
