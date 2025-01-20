import useCount from "./hooks";

const Example = () => {
  const { counts, upCount } = useCount();
  return (
    <>
      <div>Counts: {counts}</div>
      <button onClick={upCount}>Count Up!</button>
    </>
  );
};

export default Example;
