import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  cartOpened: false,
  notification: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    toggleCart(state) {
      state.cartOpened = !state.cartOpened;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    hideNotification(state, action) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;
