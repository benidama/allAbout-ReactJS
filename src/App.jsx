import React from "react";
import "./App.css";
import Reactus from "./Component/Reactus";
import Forms from "./Component/Forms";
import State from "./Component/State";
import Ref from "./Component/Ref";
import Effect from "./Component/Effect";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl text-cyan-700">React JS</h1>
      <Reactus />
      <Forms />
      <State />
      <Ref />
      <Effect />
    </>
  );
}

export default App;
