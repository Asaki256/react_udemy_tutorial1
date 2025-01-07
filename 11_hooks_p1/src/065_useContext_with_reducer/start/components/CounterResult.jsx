import { useCountContext } from "../context/CountContext";

const CounterResult = () => {
  const state = useCountContext();
  return <h3>{state}</h3>;
};

export default CounterResult;
