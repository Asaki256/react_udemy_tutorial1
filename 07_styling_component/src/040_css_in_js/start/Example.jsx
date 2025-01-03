import { useState } from "react";
import styled from "styled-components";

console.dir(styled);
const StyleButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background: ${({ isSelected }) => (isSelected ? "pink" : "")};

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const OrangeButton = styled(StyleButton)`
  background: orange;

  &:active,
  &:hover {
    color: red;
    font-size: 20px;
  }

  span {
    color: blue;
    font-weight: bold;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyleButton isSelected={isSelected} onClick={clickHandler}>
        あああ
      </StyleButton>
      <OrangeButton isSelected={isSelected} onClick={clickHandler}>
        <span>スパン</span>二個目
      </OrangeButton>
      {/* <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
        ボタン
      </button> */}
      <div style={{ textAlign: "center" }}>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example;
