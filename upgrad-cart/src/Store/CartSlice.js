import { createSlice } from '@reduxjs/toolkit'


const initialState =[];

const cartslice=createSlice( {
name:'cart',
initialState,
reducers:{
    add:(state,action)=>{
        const productToAdd=action.payload;
        const existingProduct=state.find(product=>product.id===productToAdd.id)
        if(existingProduct){
            existingProduct.quantity++;
        }else{
            state.push({...productToAdd,quantity:1})
        }
    },

    remove:(state,action)=>{
          const productToRemove=action.payload;
          const existingProduct=state.find(product=>product.id===productToRemove.id)
          if(existingProduct.quantity>1){
             existingProduct.quantity--;
          }else{
             state.splice(state.indexOf(productToRemove))
          }
    },

    clearCart:(state,action)=>{
     return[];
    },

    addToData:(state,action)=>{
        state.push(action.payload)
    }
}
})
export const {add,remove,clearCart,addToData}= cartslice.actions
export default cartslice.reducer