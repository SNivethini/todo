import "./App.css";
import React, { useState } from "react";

import InputContainer from "./components/InputContainer";
import DolistContainer from "./components/DolistContainer";
import Todo from "./components/Todo";

function App() {
  const [data, setData] = useState("");
  const [add, setAdd] = useState([]);

  function writeData(e) {
    setData(e.target.value);
  }

  function addData() {
    if (data != "") {
      setAdd((preData) => [...preData, data]);
      setData("");
    }
  }
  console.log(add);
  function delTodo(todoIndex) {
    setAdd((preData) =>
      preData.filter((preData, preDataIndex) => {
        return preDataIndex != todoIndex;
      })
    );
  }

  return (
    <main>
      <h1> To Do List </h1>
      <InputContainer data={data} writeData={writeData} addData={addData} />
      <DolistContainer add={add} delTodo={delTodo} />
    </main>
  );
}

export default App;
