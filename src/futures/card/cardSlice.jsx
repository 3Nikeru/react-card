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
            const itemId = action.payload; //как мы получаем тут id с помощью action.payload?
            // console.log(state.cardItems);
            
            state.cardItems = state.cardItems.filter(item => item.id !== itemId); 
            //как мы через состояние (state) можем достучатся до нашего cardItems?
        }
    }
})
console.log(cardSlice.actions);
export const {removeItem} = cardSlice.actions
export default cardSlice.reducer
