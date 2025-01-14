import { useContext } from "react";
import { MyContext } from "../Example";

const OtherChild = () => {
  const [, setValue] = useContext(MyContext);

  const clickHandler = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
      {/* <h3>{value}</h3> */}
    </div>
  );
};

export default OtherChild;
