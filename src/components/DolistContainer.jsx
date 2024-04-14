import React from "react";
import Todo from "./Todo";

export default function DolistContainer({ add, delTodo }) {
  return (
    <div className="container">
      {add.map((a, index) => {
        return <Todo todo={a} delTodo={delTodo} index={index} />;
      })}
    </div>
  );
}
