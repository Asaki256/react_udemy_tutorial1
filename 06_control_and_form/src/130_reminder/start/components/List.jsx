const List = ({todosList}) => {
  return (
    <ul>
      {todosList.map(todo => {
        return (
          <li key={todo.id}>
            <button>完了</button>{todo.content}
          </li>
        )
      })}
    </ul>
  )
}
export default List;