import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice, { selectCount } from "./redux/slices/counterSlice";

export const { increment, decrement, changeByValue } = counterSlice.actions;

const App = () => {
  const count = useSelector(selectCount);

  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const wrap = (action) => (value) => {
    const res = action(value);
    console.log(res);
    return res;
  };

  return (
    <>
      <h1>Counter app</h1>
      <p>Count: {count}</p>

      <button onClick={() => dispatch(wrap(increment)())}>Increment</button>
      <button onClick={() => dispatch(wrap(decrement)())}>Decrement</button>
      <button onClick={() => dispatch(wrap(changeByValue)(value))}>
        Change by Value
      </button>

      <input onChange={(e) => setValue(parseInt(e.target.value))} />
    </>
  );
};

export default App;
