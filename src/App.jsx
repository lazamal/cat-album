import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CatImage from "./components/catImage";

function App() {
  const [showImage, setShowImage] = useState(null);

  const handlePics = function (event) {
    const files = Array.from(event.target.files);
    const url = URL.createObjectURL(files[0]);
    setShowImage(url);
    event.target.value = null;
  };

  return (
    <>
      <h1 className="pb-5">האלבום של שוש החתולה</h1>
      <div>
        <CatImage src={showImage} key={Math.random} />
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
            onChange={handlePics}
            multiple
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
