import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyHeader } from "./components/MyHeader";
import { TodoItem } from "./components/TodoItem";

// this is myy comment

function App() {
  const [todoText, setTodoText] = useState("");

  const [todos, setTodos] = useState([
    {
      text: "לעשות כלים",
      id: Math.random(),
      isDone: true,
    },
  ]);

  return (
    <>
      <div className="bg-blue-500 ">
        <h1 className="pb-5 hover:bg-blue-950">Todo App</h1>
        {todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}

        <div>מה המשימה?</div>
        <div>
          <input
            className="bg-blue-950"
            value={todoText}
            onChange={(event) => {
              setTodoText(event.target.value);
            }}
          />
        </div>

        <button
          onClick={() => {
            const newTodo = {
              text: todoText,
              id: Math.random(),
              isDone: false,
            };

            setTodos([...todos, newTodo]);
            setTodoText("");
          }}
        >
          הוסף משימה
        </button>
      </div>
    </>
  );
}

export default App;
