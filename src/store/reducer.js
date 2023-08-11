import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    value : 0,
    cartItems:[],
    entities :[],
    loading : false,
}

export const getposts = createAsyncThunk('getData',async(thunkApi)=>{

    const res = await fetch('https://fakestoreapi.com/products').then(
    (data) => data.json()
  )
  return res
})

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

    },extraReducers:{
        [getposts.pending]: (state) => {
            state.loading = true
          },
          [getposts.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.entities = payload
          },
          [getposts.rejected]: (state) => {
            state.loading = false
          },
    }
});

export const { increment, decrement, incrementByAmount,incrementusingApi } = cartSlice.actions

export default cartSlice.reducer;

