import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cart: [],
    wishList: [],
    total: 0,
    shipping: 0,
};

const calculateShipping = subtotal => {
    if (subtotal > 200) {
        return 10;
    } else if (subtotal > 100) {
        return 20;
    } else {
        return 30;
    }
};

const updateTotalAndShipping = state => {
    const subtotal = state.cart.reduce((acc, product) => acc + product.price * product.purchaseQuantity, 0);
    state.total = subtotal;
    state.shipping = calculateShipping(subtotal);
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const isExist = state?.cart?.find(item => item._id === payload._id);
            if (isExist) {
                toast.error(`You already added ${isExist.name} 😣`, {
                    duration: 4000,
                    zIndex: 9999999,
                });
            } else { 
                if(!payload?.purchaseQuantity){ 
                    console.log("quantity 1");
                    state.cart = [...state.cart, { ...payload, purchaseQuantity: 1 }];
                    updateTotalAndShipping(state);
                }else{ 
                    console.log("quantity many");
                    state.cart = [...state.cart, payload];
                    updateTotalAndShipping(state);
                }
                
            }
        },
        addToWishList: (state, { payload }) => {
            state.wishList.push(payload);
        },
        incrementQuantity: (state, { payload }) => {
            const _data = [...state.cart];
            _data[payload.index].purchaseQuantity += 1;
            state.cart = _data;
            updateTotalAndShipping(state);
        },
        decrementQuantity: (state, { payload }) => {
            const _data = [...state.cart];
            _data[payload.index].purchaseQuantity -= 1;
            state.cart = _data;
            updateTotalAndShipping(state);
        },
        removeToCart: (state, { payload }) => {
            const itemToRemove = state.cart.find(item => item._id === payload._id);

            if (itemToRemove) {
                state.cart = state.cart.filter(item => item._id !== payload._id);
                updateTotalAndShipping(state);
                toast.success(`${itemToRemove.name} removed from the cart! 🛒`, {
                    duration: 4000,
                    zIndex: 9999999,
                });
            } else {
                toast.error(`Item not found in the cart 😕`, {
                    duration: 4000,
                    zIndex: 9999999,
                });
            }
        },
    },
});

export const { addToCart, addToWishList, incrementQuantity, decrementQuantity,removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
