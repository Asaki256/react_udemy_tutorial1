import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  console.log('root',count);
  const countUp = () => {
    setCount(count + 1);
    setCount(prevstate => {
      return prevstate + 1;
    })
    console.log(count);
  }
  const countDown = () => {
    setCount(count - 1);
  }
  return (
    <>
      <p>カウント: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  )
};

export default Example;
