const Example = () => {
  const num = { val: 2 };
  const double = (numObj) => {
    const newNum = { val: numObj.val * 2 };
    // numObj.val = numObj.val * 2;
    return newNum;
  };
  console.log(double(num));
  console.log(num);
  console.log(num === double(num));
  return (
    <>
      <h3>純粋関数</h3>
      <p>fn(決まった引数) には 決まった戻り値 を返す</p>
    </>
  );
};

export default Example;
