import "./Expression.css"

const Expression = () => {
  const title = "Expression"
  const array = ['item1','item2','item3'];
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>Hello JSX(JSXは変数としても使える)</h3>
  const bool = true;
  console.log(jsx);

  return (
    <div className={title.toLowerCase()}>
      <h3>Hello Expression {title}</h3>
      <h3>{array}</h3>
      <h3>{hello('Hello')}</h3>
      <h3>{/*comment*/}</h3>
      {<h3>Hello JSX(JSXをそのまま{}で囲ってもOK)</h3>}
      {jsx}
      <h3>{bool}</h3>
    </div>
  )
}
export default Expression;