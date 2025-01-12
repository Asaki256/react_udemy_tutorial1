import { useTodoContext } from "../context/TodoContext";
import Item from "./Item";

const List = () => {
  const todos = useTodoContext();
  return (
    <div>
      {todos.map((todo) => {
        return <Item todo={todo} key={todo.id}></Item>;
      })}
    </div>
  );
};

export default List;
