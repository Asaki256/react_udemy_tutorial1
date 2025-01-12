import { useState } from "react";
import { useTodoDispatch } from "../context/TodoContext";

const Item = ({ todo }) => {
  const [isComposing, setIsComposing] = useState(false);
  const dispatch = useTodoDispatch();
  const handleComplete = () => {
    dispatch({ type: "delete", todo });
  };
  const updateTodo = (updates) => {
    const newTodo = { ...todo, ...updates };
    dispatch({
      type: "change",
      todo: newTodo,
    });
  };
  const startEditContent = () => {
    updateTodo({ editing: true });
  };
  const endEditContent = (e) => {
    if (e.key === "Enter" && !isComposing) {
      updateTodo({ editing: false });
    }
  };
  const changeContent = (e) => {
    updateTodo({
      content: e.target.value,
    });
  };
  return (
    <div>
      <button onClick={handleComplete}>完了</button>
      {todo.editing ? (
        <input
          type="text"
          onKeyDown={endEditContent}
          value={todo.content}
          onChange={changeContent}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
        />
      ) : (
        <span onDoubleClick={startEditContent}>
          Id: {todo.id}, Content: {todo.content}
        </span>
      )}
    </div>
  );
};

export default Item;
