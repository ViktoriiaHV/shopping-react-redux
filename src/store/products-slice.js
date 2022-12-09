import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
    products: [],
    isLoading: true
}

export const productsSlice = createSlice({
    name: "products",
    initialState: initialProductsState,
    reducers: {
        loadProducts(state, action) {
            state.products = action.payload;
            state.isLoading = false;
        }
    }
})

export const productActions = productsSlice.actions;