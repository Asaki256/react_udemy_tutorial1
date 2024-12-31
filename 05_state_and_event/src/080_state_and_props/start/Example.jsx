import { useState } from "react";


const Example = () => {
  const [ toggle, setToggle ] = useState(true);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const toggleComponent = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
    <h2>stateをpropsに渡すパターン
    </h2>
    <ul>
    <li>コンポが消滅する可能性がある時</li>
    <li>特定のstateを複数のコンポで共有したい時</li>
    </ul>
    <button onClick={toggleComponent}>toggle</button>
    {toggle ? <Count title="A" count={countA} setCount={setCountA}/> : <Count key="B" title="B" count={countB} setCount={setCountB}/>}
    </>
  )
}
const Count = ({ title, count, setCount }) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
