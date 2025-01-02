const List = ({ todosList, removeTodo }) => {
  return (
    <div>
      {todosList.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => removeTodo(todo.id)}>完了</button>
            {todo.content}, ID:{todo.id}
          </div>
        );
      })}
    </div>
  );
};
export default List;
