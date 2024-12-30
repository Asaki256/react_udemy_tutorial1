import React from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*#__PURE__*/
const Example = () => {
  const sample1 =
    <h1 className="greeting">
      Hello World
    </h1>
    
    console.log(sample1);
    const sample111 = _jsx("h1", {
      className: "greeting",
      children: "Hello World"
    });
    console.log(sample111)

  // React.createElement("h1", {
  //   className: "greeting"
  // }, "Hello World");

  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );
  const sample222 =
  _jsxs("div", {
    children: [
      _jsx("h1", {
        children: "Hello!"
      }), _jsx("h2", {
      children: "Good to see you."
    })]
});

  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    ).props
  );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("h2", null, "Good to see you.")
  );
};

export default Example;
