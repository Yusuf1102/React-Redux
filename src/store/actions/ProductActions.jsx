import axios from "axios";
import { getproducts } from "../reducers/ProductReducer";


export const asyncgetproducts = ()=> async (dispatch,getState)=>{
    try{
        const response = await axios.get("https://fakestoreapi.com/products")
        //console.log(response.data )
        dispatch(getproducts(response.data))
    }catch(error){
        console.log(error)
    }
}