import React from 'react';
import Display3 from "./Display3";
import {useCounterState} from "../conext/CounterContext";

const Display2 = () => {
  const {counter} = useCounterState()
  return (
    <div style={{backgroundColor: '#ccc', padding: '1rem', margin: '1rem'}}>
      <h1>display 2</h1>
      counter value is :{counter}
      <br/>
      <Display3 counter={counter}/>
    </div>
  );
};

export default Display2;