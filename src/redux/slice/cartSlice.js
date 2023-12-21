import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState={
 cart:[],
 wishList:[],
 total:0,
 shipping:0

}
export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{ 
            console.log(action.payload,"abc");
            const isexist=state?.cart?.find(item=>item._id===action.payload._id)  
            if(isexist){
                toast.error(`You already added ${isexist.name} 😣`, {
                    duration: 4000,
                    zIndex: 9999999, 
                  });
            }else{  
                state.cart.push({...action.payload,qurchaseQuantity:1})
                const subtotal= state.cart.reduce((acc,product)=>acc+((product.price)*(product.qurchaseQuantity)),0)
                state.total=subtotal 

                if(subtotal>200){
                    state.shipping=10
                }else if(subtotal>100){
                    state.shipping=20
                }else{
                    state.shipping=30
                }

                
            }
        },
        addToWishList:(state,action)=>{
            state.wishList.push(action.payload)
        },
        incrementQuantity:(state,action)=>{
            const _data=[...state.cart]
            _data[action.payload.index].qurchaseQuantity +=1
            state.cart=_data 
            const subtotal= state.cart.reduce((acc,product)=>acc+((product.price)*(product.qurchaseQuantity)),0)
            state.total=subtotal 

            if(subtotal>200){
                state.shipping=10
            }else if(subtotal>100){
                state.shipping=20
            }else{
                state.shipping=30
            }
        },
        decrementQuantity:(state,action)=>{
            const _data=[...state.cart]
            _data[action.payload.index].qurchaseQuantity -=1
            state.cart=_data  
            const subtotal= state.cart.reduce((acc,product)=>acc+((product.price)*(product.qurchaseQuantity)),0)
            state.total=subtotal 

            if(subtotal>200){
                state.shipping=10
            }else if(subtotal>100){
                state.shipping=20
            }else{
                state.shipping=30
            }
        }
    }
})

export const {addToCart,addToWishList,incrementQuantity,decrementQuantity} =cartSlice.actions
export default cartSlice.reducer