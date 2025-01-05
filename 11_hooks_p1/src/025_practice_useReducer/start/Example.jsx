import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { type, value }) => {
  const newState = { ...state };

  if (type === "a") {
    newState.a = +value;
  } else if (type === "b") {
    newState.b = +value;
  } else if (type === "calc") {
    switch (value) {
      case CALC_OPTIONS[0]:
        newState.result = newState.a + newState.b;
        break;
      case CALC_OPTIONS[1]:
        newState.result = newState.a - newState.b;
        break;
      case CALC_OPTIONS[2]:
        newState.result = newState.a / newState.b;
        break;
      case CALC_OPTIONS[3]:
        newState.result = newState.a * newState.b;
        break;
    }
  } else {
    throw new Error("不明なエラー");
  }
  return newState;
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ type: "calc", value: e.target.value });
  };

  const numChangeHandler = (e) => {
    dispatch({ type: e.target.name, value: e.target.value });
  };

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input type="number" name="a" value={state.a} onChange={numChangeHandler} />
      </div>
      <div>
        b:
        <input type="number" name="b" value={state.b} onChange={numChangeHandler} />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
