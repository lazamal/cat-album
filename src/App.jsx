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
        
      </div>
    </>
  )
}

export default App
