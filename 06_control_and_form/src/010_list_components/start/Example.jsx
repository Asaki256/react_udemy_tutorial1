
const animals = ["Dog", "Cat", "Rat", "Pikachu"];

const Example = () => {
  // const animalList = []
  // for(const animal of animals) {
  //   animalList.push(<li>{animal}</li>)
  // }
  const helloAnimals = animals.map((animal, index)=>
    <li key={animal}>Hello, {animal}</li>
  );
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {helloAnimals}
      </ul>
    </>
  );
};

export default Example;
