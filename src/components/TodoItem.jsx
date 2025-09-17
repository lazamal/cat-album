export const TodoItem = ({ item, todos, setTodos }) => {
  return (
    <div
      key={item.id}
      onClick={() => {
        const newTodos = todos.map((oneTodo) => {
          if (oneTodo.id == item.id) {
            oneTodo.isDone = !oneTodo.isDone;
          }
          return oneTodo;
        });
        setTodos(newTodos);
      }}
    >
      {item.text}
      <span>{item.isDone ? "✅" : "🟩"}</span>
    </div>
  );
};
