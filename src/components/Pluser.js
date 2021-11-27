import React from 'react';
import { plusCounter, useCounterDispatch } from "../conext/CounterContext";
const Pluser = () => {

  const counterDispatch = useCounterDispatch();


  return (
    <button onClick={() => plusCounter(counterDispatch)}>
      plus
    </button>
  );
};

export default Pluser;