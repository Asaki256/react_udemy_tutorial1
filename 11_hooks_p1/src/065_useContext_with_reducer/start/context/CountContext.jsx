import { createContext, useReducer, useContext } from "react";

const CountContext = createContext();
const CountUpdateContext = createContext();

const CountProvider = ({ children }) => {
  // const [state, setState] = useState();
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error("不明なactionです。");
    }
  }, 0);
  return (
    <CountContext.Provider value={state}>
      <CountUpdateContext.Provider value={dispatch}>{children}</CountUpdateContext.Provider>
    </CountContext.Provider>
  );
};

const useCountContext = () => useContext(CountContext);
const useCountUpdateContext = () => useContext(CountUpdateContext);

export { CountProvider, useCountContext, useCountUpdateContext };
