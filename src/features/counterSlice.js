import { createSlice } from "@reduxjs/toolkit";

export const selectCount = (state) => state.counter.value;

export const Slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    changeByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, changeByValue } = Slice.actions;

export default Slice.reducer;
