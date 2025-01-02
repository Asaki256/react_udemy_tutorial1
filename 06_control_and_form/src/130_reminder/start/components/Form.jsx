import {useState} from "react";
import { nanoid } from "nanoid";

const Form = ({addTodo}) => {
  const [content, setContent] = useState("");

  const addContent = (e) => {
    e.preventDefault();

    if(!content) return;
    const todo = {
      id: nanoid(),
      // id: Math.floor(Math.random() * 1e5),
      content: content
    }
    addTodo(todo);
    setContent("");
  }
  return (
    <div>
      <form onSubmit={addContent}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  )
}
export default Form;