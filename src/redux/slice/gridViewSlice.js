import { createSlice } from "@reduxjs/toolkit";
const initialState={
 isGrid:false
}
export const gridSlice=createSlice({
    name:'grid',
    initialState,
    reducers:{
        gridView:(state,action)=>{
            state.isGrid=true
        },
        cardView:(state,action)=>{
            state.isGrid=false
        },
    }
})

export const {gridView,cardView} =gridSlice.actions
export default gridSlice.reducer