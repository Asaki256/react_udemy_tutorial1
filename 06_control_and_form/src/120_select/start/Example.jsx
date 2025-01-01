import {useState} from "react";

const Example = () => {
  const selectList = ["Apple", "Banana", "Peach"];
  const [selectVal, setSelectVal] = useState("Apple");
  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <select value={selectVal} onChange={e => setSelectVal(e.target.value)}>
        {selectList.map(val => {
          return (
            <option key={val} value={val}>{val}</option>
          )
        })}
      </select>
      {selectVal}が選択されています。
    </>
  );
};

export default Example;
