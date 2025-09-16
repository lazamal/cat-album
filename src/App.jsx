import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyHeader } from './components/MyHeader'



function App() {
  const [count,setCount] = useState(0);


  const [todos, setTodos] = useState([
    {
    text:' לעשות כלים',
    id: Math.random(),
    isDone: false
  }
])

  return (
    <>
      <div>
        <h1>
          Todo App
        </h1>
        
        {todos.map((item) =>{
          return <div key={item.id}> {item.text} </div>
        })}
        
        <button onClick={() => {

          const newTodoText = prompt('מה המשימה?')
          const newTodo =  
            {
                  text: newTodoText,
                  id: Math.random(),
                  isDone: false
            }
          
          setTodos([...todos,newTodo])
        }}>
          הוסף משימה
           </button>
      </div>
    </>
  )
}

export default App
