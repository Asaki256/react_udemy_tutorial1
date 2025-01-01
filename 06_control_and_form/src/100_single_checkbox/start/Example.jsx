import {useState} from "react";
const Example = () => {
  const [isCheck, setIsCheck] = useState(true);
  return (
    <div style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
      <div>
        <label>
          チェック：
          <input type="checkbox" checked={isCheck} onChange={()=>setIsCheck(prev => !prev)}/>
        </label>
      </div>
      <div>
      {isCheck ? "trueだよん" : "falseだお"}
      </div>
    </div>
  );
};

export default Example;
