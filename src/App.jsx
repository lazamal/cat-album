import { useState } from "react";
import "./App.css";
import CatImage from "./components/catImage";
import { CatConcept } from "./components/CatConcept";
import { CAT_DATA } from "./cat_data";
import { TabButton } from "./components/TabButton";
import Tabs from "./components/Tabs";

function App() {
  const [catArray, setCatArray] = useState([]);

  const titles = CAT_DATA.map((item) => item.title);

  const [catConceptData, setCatConceptData] = useState(null);

  function handleClick(catData) {
    setCatConceptData(catData);
  }

  return (
    <>
      <h1 className="pb-5 text-fuchsia-700">האלבום של שוש</h1>
      <section id="cat-concepts" className="flex flex-col gap-10">
        <h2 className="text-4xl text-fuchsia-600 mb-2">cat concepts</h2>
        <Tabs
          buttonsContainer="menu"
          buttons={
            <>
              <TabButton handleClick={() => handleClick(CAT_DATA[0])}>
                {titles[0]}
              </TabButton>
              <TabButton handleClick={() => handleClick(CAT_DATA[1])}>
                {titles[1]}
              </TabButton>
              <TabButton handleClick={() => handleClick(CAT_DATA[2])}>
                {titles[2]}
              </TabButton>
            </>
          }
        />
        <div>
          {!catConceptData ? (
            <p className="text-2xl">Select a topic to learn about my cat</p>
          ) : (
            <CatConcept {...catConceptData} />
          )}
        </div>
      </section>
      <div>
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
        <div className="grid grid-cols-3 gap-4">
          {catArray.map((pic, index) => (
            <CatImage key={index} src={pic} />
          ))}
        </div>
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
