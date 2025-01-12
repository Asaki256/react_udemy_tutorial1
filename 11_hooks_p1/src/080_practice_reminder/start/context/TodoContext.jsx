import {
  useReducer,
  useContext,
  createContext,
} from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const TodoProvider = ({ children }) => {
  const reducer = (todos, action) => {
    switch (action.type) {
      case "create":
        return [...todos, action.todo];
      case "delete":
        return todos.filter((todo) => {
          return todo.id !== action.todo.id;
        });
      case "change":
        return todos.map((todo) => {
          return todo.id === action.todo.id
            ? { ...todo, ...action.todo }
            : { ...todo };
        });
      default:
        throw new Error("不明なエラー");
    }
  };
  const initState = [
    {
      id: 1,
      content: "店予約する",
      editing: false,
    },
    {
      id: 2,
      content: "卵買う",
      editing: false,
    },
    {
      id: 3,
      content: "郵便出す",
      editing: false,
    },
  ];
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodoContext = () => {
  return useContext(TodoContext);
};
const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
};

export { TodoProvider, useTodoContext, useTodoDispatch };
