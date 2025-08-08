import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchCategories = createAsyncThunk('cat/addcat',async()=>{
  const response = await axios('http://127.0.0.1:8000/categories/')
  return response.data
})

export const fetchProducts = createAsyncThunk('prod/getproducts',async()=>{
  const response = await axios.get('http://127.0.0.1:8000/products/')
  return response.data.results;
})

const productSlice = createSlice({
    name : 'product',
    initialState:{
      product:[],
      category:[],
      status:'idle',
      error:null
    },
    reducers:{
    },
    extraReducers:(builder)=>{
      builder
        .addCase(fetchCategories.pending,(state)=>{
          state.status = 'loading'
        })
        .addCase(fetchCategories.fulfilled,(state,action)=>{
          state.status = 'fullfilled'
          state.category = action.payload
        })
        .addCase(fetchCategories.rejected,(state,action)=>{
          state.status = 'failed'
          state.error = action.error.message
        })
        .addCase(fetchProducts.pending,(state)=>{
          state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
          state.status = 'fullfilled'
          state.product = action.payload
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
          state.status = 'failed'
          state.error = action.error.message
        })
    }

})

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;
