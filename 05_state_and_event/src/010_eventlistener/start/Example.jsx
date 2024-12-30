const Example = () => {
  // なるべく名前付き関数を使用した方が良い
  const clickHandler = () => {
    alert('ボタンがクリックされた！');
    console.log('clicked');
  }
  const clickHandler2 = () => {
    console.log('clicked2');
  }
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
