const Hello = (props) => {
  // const name='TOM'
  console.log(props.name);
  console.log(Reflect.getOwnPropertyDescriptor(props, 'name'));

  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;