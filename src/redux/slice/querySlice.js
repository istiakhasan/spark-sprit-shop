import { createSlice } from "@reduxjs/toolkit";
const initialState={
 searchTerm:'',
 page:'',
 category:'',
 colors:'',
 brands:'',
 minPrice:0,
 maxPrice:'',
}
export const querySlice=createSlice({
    name:'query',
    initialState,
    reducers:{
        changePage:(state,action)=>{
            state.page=action.payload
        },
        addSearchTerm:(state,action)=>{
            state.searchTerm=action.payload

        },
        filterByCategory:(state,action)=>{
            state.category=JSON.stringify(action.payload)
        },
        filterByColors:(state,action)=>{
            state.colors=JSON.stringify(action.payload)
        },
        filterByBrands:(state,action)=>{
            state.brands=JSON.stringify(action.payload)
        },
        filterByMinPrice:(state,action)=>{
            state.minPrice=action.payload
        },
        filterByMaxPrice:(state,action)=>{
            state.maxPrice=action.payload
        },
        resetQuery:(state,action)=>{
            state.category=''
            state.page=''
            state.searchTerm=''
          
            state.maxPrice=''
            
        },
    }
})

export const {changePage,addSearchTerm,filterByCategory,resetQuery,filterByColors,filterByBrands,filterByMinPrice,filterByMaxPrice} =querySlice.actions
export default querySlice.reducer