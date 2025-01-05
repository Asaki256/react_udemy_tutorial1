import { useState, useReducer } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const up = () => {
    setState((prev) => ++prev);
  };
  const [rstate, dispatch] = useReducer((state, { type, step }) => {
    switch (type) {
      case "+":
        return state + step;
      case "-":
        return state - step;
      default:
        throw new Error("不正なaction");
    }
    // if (action === "+") {
    //   return ++state;
    // } else if (action === "-") {
    //   return --state;
    // }
  }, 0);
  const rup = () => {
    dispatch({ type: "+", step: 2 });
  };
  const rdown = () => {
    dispatch({ type: "-", step: 4 });
  };

  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={up}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rup}>+</button>
        <button onClick={rdown}>-</button>
      </div>
    </>
  );
};

export default Example;
