import Counter from "./components/Counter";
import { CountProvider } from "./context/CountContext";

// POINT useContext x useReducer
const Example = () => {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
};

export default Example;
