import {useState} from "react";
const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const fruitArray = ["Apple", "Banana", "Cherry"];
  const onChange = (e) => setFruit(e.target.value);
  return (
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      {fruitArray.map(value => {
        return (
          <label>
            <input
              key={value}
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={onChange}
            />
            {value}
          </label>
        )
      })}
    </p>
  );
};

export default Example;
