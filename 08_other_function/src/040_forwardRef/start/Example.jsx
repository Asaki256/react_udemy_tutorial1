import { useRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

const Example = () => {
  const inputRef = useRef();
  console.log(inputRef);
  return (
    <>
      <Input ref={inputRef} />
      <button
        onClick={() => {
          console.dir(inputRef.current);
          inputRef.current.focus();
        }}
      >
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
