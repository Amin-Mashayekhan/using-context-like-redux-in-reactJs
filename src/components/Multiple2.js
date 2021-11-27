import React from 'react';
import { multiple2, useCounterDispatch } from "../conext/CounterContext";
const Multiple2 = () => {
  const counterDispatch = useCounterDispatch();

  return (
    <button onClick={() => multiple2(counterDispatch)}>
      *2</button>
  );
};

export default Multiple2;