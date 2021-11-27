import React from 'react';
import {useCounterState} from "../conext/CounterContext"; 
const Display1 = () => {

  const {counter } = useCounterState()
  return (
    <div style={{backgroundColor: '#aaa', margin: '1rem'}}>
      counter value is :{counter}
    </div>
  );
};

export default Display1;