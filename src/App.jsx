import { useState } from "react";
import "./App.css";
import CatImage from "./components/catImage";
import { CatConcept } from "./components/CatConcept";
import { CAT_DATA } from "./cat_data";
import { TabButton } from "./components/TabButton";
import Tabs from "./components/Tabs";
import HomePage from "./pages/homepage";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router";
import ItemPage from "./pages/ItemPage";
import ExamplePage from "./pages/ExamplePage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="fixed top-0 w-screen flex flex-row gap-4 text-2xl">
          <Link to={"/"}>homepage</Link>
          <Link to={"/example"}>Example</Link>
          <Link to={"/item/:id"}>Item</Link>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
