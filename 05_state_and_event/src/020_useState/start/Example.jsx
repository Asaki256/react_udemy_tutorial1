import {useState} from "react";

const Example = () => {
  const [val, setVal] = useState('');
  // console.log(displayVal);
  return (
    <>
      <input
      type="text"
      onChange={(e) => {
        setVal(e.target.value);
      }}/> = {val}
    </>
  );
};

export default Example;
