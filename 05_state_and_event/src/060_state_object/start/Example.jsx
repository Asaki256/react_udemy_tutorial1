import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj)
  const changeName = (e) => {
    console.log({...person, name: e.target.value, age:20});
    setPerson({...person, name: e.target.value, age: 20})
  }
  const changeAge = (e) => {
    setPerson({name: person.name, age: e.target.value});
  }
  const resetPerson = () => {
    setPerson({name: "", age: ""})
  }

  return (<>
    <h3>Name:{person.name}</h3>
    <h3>Age:{person.age}</h3>
    <input type="text" value={person.name} onChange={changeName}/>
    <input type="number" value={person.age} onChange={changeAge}/>
    <div>
      <button onClick={resetPerson}>
        リセット
      </button>
    </div>
  </>)
};

export default Example;
