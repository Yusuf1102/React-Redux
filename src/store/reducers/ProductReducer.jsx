import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[],
}

export const ProductSlice = createSlice({
    name:"Product",
    initialState,
    reducers:{
        getproducts: (state,action)=>{
            //    console.log(action)
               state.products = action.payload;
        }
    }
})
export const {getproducts} = ProductSlice.actions;
export default ProductSlice.reducer;