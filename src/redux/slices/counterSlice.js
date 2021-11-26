import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
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
      state.value = action.payload;
    },
  },
});

export const selectCount = (state) => state.counter.value;

export default Slice;
