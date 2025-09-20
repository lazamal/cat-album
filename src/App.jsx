import { useState } from "react";
import "./App.css";
import CatImage from "./components/catImage";
import { CatConcept } from "./components/CatConcept";

function App() {
  const [catArray, setCatArray] = useState([]);

  return (
    <>
      <h1 className="pb-5">האלבום של שוש</h1>
      <section id="cat-concepts">
        <h2>cat concepts</h2>
        <ul>
          <CatConcept {...CAT_CONCEPTS[0]} />
        </ul>
      </section>
      <div>
        {catArray.map((pic, index) => (
          <CatImage key={index} src={pic} />
        ))}
        <br></br>
        <br></br>
        <label
          id="uploadedPhoto"
          className="cursor-pointer px-4 py-2 bg-amber-800 text-white rounded"
        >
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="uploadedPhoto"
            name="filename"
            className="hidden"
            multiple
            onChange={(event) => {
              const files = Array.from(event.target.files);
              const urls = files.map((file) => URL.createObjectURL(file));
              setCatArray([...catArray, ...urls]);
              event.target.value = null;
            }}
          />
          הוסף תמונה!
        </label>
      </div>
    </>
  );
}

export default App;

// example on to make a button do something in react
// <button
//   onClick={() => {
//     const newTodo = {
//       text: todoText,
//       id: Math.random(),
//       isDone: false,
//     };

//     setTodos([...todos, newTodo]);
//     setTodoText("");
//   }}
// >
//   הוסף תמונה
// </button>
