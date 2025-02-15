import { useEffect, useState } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(false);
  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>
        トグル
      </button>
    </>
  );
};
const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("init (依存配列なし)");
    // console.log("useEffect is called");
    let intervalId = null;
    intervalId = window.setInterval(() => {
      console.log("interval called");
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
      console.log("end (依存配列なし)");
    };
  }, []);

  useEffect(() => {
    console.log("init (依存配列あり)");
    document.title = "counter:" + time;
    window.localStorage.setItem("time-key-end", time);
    return () => {
      console.log("end (依存配列あり)");
    };
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
