import React from "react";

var CounterStateContext = React.createContext();
var CounterDispatchContext = React.createContext();

function counterReducer(state, action) {
  switch (action.type) {
    case "INC":
      return {...state, counter: state.counter + 1};
    case "DEC":
      return {...state, counter: state.counter - 1};
    case "MUL":
      return {...state, counter: state.counter * 2};
    case "plusNum":
      return {...state, counter: state.counter + parseInt(action.payload)};
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CounterProvider({children}) {
  var [state, dispatch] = React.useReducer(counterReducer, {
    counter: 5,
  });
  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}

function useCounterState() {
  var context = React.useContext(CounterStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useCounterDispatch() {
  var context = React.useContext(CounterDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export {CounterProvider, useCounterState, useCounterDispatch, plusCounter, minusCounter, multiple2, plusNumber};

// ###########################################################
function plusCounter(dispatch) {
  dispatch({
    type: "INC",
  });
}

function minusCounter(dispatch) {
  dispatch({
    type: "DEC",
  });
}

function multiple2(dispatch) {
  dispatch({
    type: "MUL",
  });
}

function plusNumber(dispatch, number) {
  dispatch({
    type: "plusNum",
    payload: number
  });
}
