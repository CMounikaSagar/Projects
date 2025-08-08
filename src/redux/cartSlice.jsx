import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

axios.defaults.withCredentials = true;

export const fetchcart = createAsyncThunk(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(
        "http://localhost:8000/cart/",
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addCart = createAsyncThunk(
  "cart/addToCart",
  async ({ product_id, quantity }, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/cart/",
        { product_id, quantity },
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const removeCart = createAsyncThunk('cart/remove', async ({ product_id, action = 'remove' }) => {
    const response = await axios.delete('http://127.0.0.1:8000/cart/', { data: { product_id, action }, withCredentials: true });
    return response.data;
});


const initialState= {
    items: [],
    subtotal: 0,
    tax: 0,
    total: 0,
    error: null,
    quantity: 0,
    totalPrice: 0
};

const cartSlice = createSlice({


    name: 'cart',
    initialState,
    reducers: {},
    
    extraReducers: (builder) => {
        builder

            // fetch cart data

            .addCase(fetchcart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchcart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.cart_items;
                state.totalPrice = action.payload.subtotal;
                state.tax = action.payload.tax;
                state.total = action.payload.total;
                state.quantity = action.payload.total_quantity;
            })
            .addCase(fetchcart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addCart.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(addCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(removeCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeCart.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(removeCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
});

export const { clearCartState } = cartSlice.actions;
export default cartSlice.reducer;
