import React, { useState } from "react";
import DolistContainer from "./DolistContainer";
// import Todo from "./Todo";

function InputContainer({ data, writeData, addData }) {
  //   const [data, setData] = useState("");
  //   const [add, setAdd] = useState([]);

  //   function writeData(e) {
  //     setData(e.target.value);
  //   }

  //   function addData() {
  //     if (data != "") {
  //       setAdd((preData) => [...preData, data]);
  //       setData("");
  //     }
  //   }
  //   function delTodo(todoIndex) {
  //     setAdd((preData) =>
  //       preData.filter((preData, preDataIndex) => {
  //         return preDataIndex != todoIndex;
  //       })
  //     );
  //   }
  return (
    <div className="inputData">
      {/* <h1>{data}</h1> */}
      <input type="text" value={data} onChange={writeData} />
      <button onClick={addData}>+</button>

      {/* <DolistContainer add={add} /> */}
      {/* <Todo delTodo={delTodo}/> */}
    </div>
  );
}

export default InputContainer;
