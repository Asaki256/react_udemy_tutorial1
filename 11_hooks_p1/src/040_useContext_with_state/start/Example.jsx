import { createContext, useState } from "react";
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";
export const MyContext = createContext("hello");

const Example = () => {
  const stateAndSetter = useState(0);

  return (
    <MyContext.Provider value={stateAndSetter}>
      <Child />
      <OtherChild />
    </MyContext.Provider>
  );
};

export default Example;
