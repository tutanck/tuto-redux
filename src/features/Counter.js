import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  changeByValue,
  selectCount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const handleChange = (e) => {
    const num = parseInt(e.target.value);
    setValue(num);
  };

  return (
    <>
      <h1>Counter app</h1>
      <p>Count: {count}</p>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(changeByValue(value))}>
        Change by Value
      </button>

      <input onChange={(e) => handleChange(e)} />
    </>
  );
};

export default Counter;
