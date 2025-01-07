import { useCountUpdateContext } from "../context/CountContext";

const CounterButton = ({ calcType, step }) => {
  const dispatch = useCountUpdateContext();

  const countHandler = () => {
    dispatch({ type: calcType, step });
  };
  return (
    <button onClick={countHandler}>
      {calcType}
      {step}
    </button>
  );
};
export default CounterButton;
