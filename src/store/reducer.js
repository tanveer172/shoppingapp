import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value : 0,
    cartItems:[],
}

export const cartSlice = createSlice({
    name : 'Counter',
    initialState,
    reducers:{
        increment : (state, action) => {
            console.log(action.payload);
            state.cartItems.push(action.payload);
            state.value += 1;
        },
        decrement : (state,action) => {
            state.value -= 1;
            let indx =  state.cartItems.findIndex(x => x.id === action.payload)
            state.cartItems.splice(indx, 1);
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
          },
        incrementusingApi:(state, action)=>{

        }

    },
});

export const { increment, decrement, incrementByAmount,incrementusingApi } = cartSlice.actions

export default cartSlice.reducer;