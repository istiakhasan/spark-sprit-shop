import { createSlice } from "@reduxjs/toolkit";
const initialState={
 cart:[],
 wishList:[],
 total:0

}
export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        addToWishList:(state,action)=>{
            state.wishList.push(action.payload)
        },
    }
})

export const {addToCart,addToWishList} =cartSlice.actions
export default cartSlice.reducer