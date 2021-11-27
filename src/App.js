import React from 'react';
import Display1 from "./components/Display1";
import Display2 from "./components/Display2";
import Display3 from "./components/Display3";
import Pluser from "./components/Pluser";
import Miner from "./components/miner";
// import {useCounterState} from "./conext/CounterContext";
import PlusInput from "./components/PlusInput";


const App = () => {

  return (
    <div>
      Welcome to context counter system.
      <Display1 />
      <Pluser click={() => {
        // setCounter(counter + 1)
      }} />
      <Display2 />
      <Miner />
      <Display3 />
      <PlusInput />
    </div>
  );
};

export default App;