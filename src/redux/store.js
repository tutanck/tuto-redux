import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

const counterReducer = counterSlice.reducer;

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
