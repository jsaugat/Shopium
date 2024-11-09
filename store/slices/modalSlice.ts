"use client"

import { createSlice } from "@reduxjs/toolkit";

export type InitialModalState = {
  isOpen: boolean;
}
const initialState: InitialModalState = {
  isOpen: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;
