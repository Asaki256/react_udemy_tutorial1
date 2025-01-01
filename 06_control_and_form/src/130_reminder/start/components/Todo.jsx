import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  return (
    <>
      <h2>Reminder</h2>
      <List todosList={todosList}/>
      <Form />
    </>
  )
};

export default Todo;