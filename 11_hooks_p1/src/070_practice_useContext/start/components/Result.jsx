import { useNumStateContext } from "../context/NumContext";

const Result = () => {
  const state = useNumStateContext();
  return <h3>結果：{state.result}</h3>;
};
export default Result;
