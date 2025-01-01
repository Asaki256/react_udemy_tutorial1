import {useState} from "react"

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  return (
    <p style={{ textAlign: "center" }}>
      <label htmlFor="123" >ラベルだよ</label>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
      <input
        type="text"
        id="123"
        placeholder="hello"
        // value={val}
        onChange={(e)=>setVal(e.target.value)}
      />
      <textarea name="test" id="456" placeholder="hkokoko" value={val} onChange={(e)=>setVal(e.target.value)}></textarea>
      <button onClick={clearVal}>くりああああ</button>
    </p>
  );
};

export default Example;
