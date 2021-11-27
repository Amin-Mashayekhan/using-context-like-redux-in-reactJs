import React, {useState} from 'react';
import { plusNumber, useCounterDispatch } from "../conext/CounterContext";

const PlusInput = () => {

  const counterDispatch = useCounterDispatch();
  const [number, setNumber] = useState("");

  const onClick = () => {
    if (!number)
      return alert("لطفا پرش کن");
    plusNumber(counterDispatch, number);
  }

  return (
    <div>
      <input value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={onClick}>
        plus
      </button>
    </div>
  );
};

export default PlusInput;