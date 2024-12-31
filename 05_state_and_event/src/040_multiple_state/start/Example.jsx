import {useState} from "react";

const Example = () => {
  console.log(<Example/>);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);

  const clickHandler = (setter, value) => {
    setter(value + 1);
  }

  return (
    <>
      <p>ボタンAを{countA}回押しました！</p>
      <button onClick={() => clickHandler(setCountA, countA)}>ボタンA</button>
      <p>ボタンBを{countB}回押しました！</p>
      <button onClick={() => clickHandler(setCountB, countB)}>ボタンB</button>
      <p>ボタンCを{countC}回押しました！</p>
      <button onClick={() => clickHandler(setCountC, countC)}>ボタンC</button>
    </>
  )
};

export default Example;
