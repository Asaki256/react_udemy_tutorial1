import { useReducer, createContext, useContext } from "react";

const NumStateContext = createContext();
const NumDispatchContext = createContext();

const CalcProvider = ({ children }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "change":
        const { name, value } = action.payload;
        return { ...state, [name]: value };
      case "add":
        return { ...state, result: state.a + state.b };
      case "minus":
        return { ...state, result: state.a - state.b };
      case "divide":
        return { ...state, result: state.a / state.b };
      case "multiply":
        return { ...state, result: state.a * state.b };
      default:
        throw new Error("不明なエラー");
    }
  }
  const initState = {
    a: 1,
    b: 2,
    result: 3,
    type: "add",
  };
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <NumStateContext.Provider value={state}>
      <NumDispatchContext.Provider value={dispatch}>{children}</NumDispatchContext.Provider>
    </NumStateContext.Provider>
  );
};

const useNumStateContext = useContext(NumStateContext);
const useNumDispatchContext = useContext(NumDispatchContext);

export { CalcProvider, useNumStateContext, useNumDispatchContext };
