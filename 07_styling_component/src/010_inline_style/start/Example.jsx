import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    width: 120,
    height: 60,
    display: "block",
    fontWeight: "bold",
    borderRadius: 9999,
    cursor: "pointer",
    border: "none",
    margin: "auto",

    background: isSelected ? "pink" : "",
  };

  return (
    <>
      <p>// styleは空文字にしている場合は設定されない</p>
      <button onClick={clickHandler} style={style}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example;
