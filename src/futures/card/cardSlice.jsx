import { createSlice } from '@reduxjs/toolkit'
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
    reducers: {
        removeItem: (state, action)=>{
            // console.log('Current state', JSON.stringify(state, null, 2));
            const itemId = action.payload;
            state.cardItems = state.cardItems.filter(item => item.id !== itemId);
        },
        increase: (state, {payload})=>{
            console.log('Current state', JSON.stringify(state.cardItems));
            
            const cardItem = state.cardItems.find(item => item.id === payload.id);
            // console.log(cardItem);
            // cardItem.amount = cardItem.amount + 1;
        },
        decrease: (state, {payload})=>{
            const cardItem = state.cardItems.find(item => item.id === payload.id);
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
        }
    }
})
// console.log(cardSlice.actions);
export const {removeItem, increase, decrease, clearCard, calculateTotals} = cardSlice.actions
export default cardSlice.reducer //хочу передать редьюсер
