import "./Child.css";
// import {Fragment} from "react";

// console.log(React);

const Child = () => {
  return (
    // Key属性をつける場合にはFragmentが必要
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facilis doloremque labore accusamus delectus cumque unde iste quas illo commodi, consectetur earum tempore! Saepe natus harum, nostrum fugiat nemo vero?</p>
    </>
  );
};

export default Child;
