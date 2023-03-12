import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // quantity : 1,
    totalAmount : 0,
    cart : []
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart : (state,{payload}) => {
            // state.cart.push(payload)
            const isExisted = state.cart.find(item => item.id === payload.id) 
            if(isExisted){
                return state
            }else{
                state.cart = [...state.cart,{...payload,qty:1}]
                // state.quantity ++;
                state.totalAmount += payload.price
            }
        },
        removeFromCart : (state,{payload}) => {
            state.cart = state.cart.filter(item => item.id !== payload.id)
            state.totalAmount -= payload.price;
            // state.quantity --;
        },
        increase : (state,{payload}) => {
            state.cart = state.cart.map((item) => {
                if(item.id === payload.id){
                   item.qty += 1 ;
                   state.totalAmount += payload.price
                }
                return item
            })
        },
         decrease : (state,{payload}) => {
            state.cart = state.cart.map((item) => {
                if(item.id === payload.id && item.qty > 1){
                   item.qty -= 1 ;
                   state.totalAmount -= payload.price
                }
                return item
            })
        },
        clearHandler : (state,{payload}) => {
            state.cart = [];
            state.totalAmount = 0
        }

    }
})

export const {addToCart,removeFromCart,increase,decrease,clearHandler} = cartSlice.actions;
export default cartSlice.reducer;