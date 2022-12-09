import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  changed: false
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + newItem.price;
      }
      state.totalQuantity = state.totalQuantity + 1;
      state.totalAmount = state.totalAmount + newItem.price;
      state.changed = true;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => id === item.id);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
      state.totalAmount = state.totalAmount - existingItem.price;
      state.totalQuantity = state.totalQuantity - 1;
      state.changed = true;
    },
    replaceCart(state, action){
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
    }
  },
});

export const cartActions = cartSlice.actions;
