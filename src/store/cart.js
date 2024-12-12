import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    statustab:false
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            let {productid,quntity} = action.payload;
            let productIndexId = (state.items).findIndex(item=>item.productid === productid)
            if(productIndexId >= 0){
                state.items[productIndexId].quntity += quntity  
            }else{
                state.items.push({productid,quntity})
            }       
        },
        changeQuntityCart(state,action){
            const {productid,quntity} = action.payload;
            const productIndexId = (state.items).findIndex(item=>item.productid === productid)
            if(quntity > 0){
                state.items[productIndexId].quntity = quntity
            }else{
                state.items = (state.items).filter(item=>item.productid !== productid)
            }       
        },
        toggleCartTab(state){
            if(state.statustab === false){
                state.statustab = true;
            }else{
                state.statustab = false;
            }
        }
    }
})
export const {addToCart,changeQuntityCart , toggleCartTab} = cartSlice.actions;
export default cartSlice.reducer;