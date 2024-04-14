import React from "react";

function Todo({ todo, index, delTodo }) {
  return (
    <div>
      <div className="todo">
        <p>{todo}</p>
        <div className="actions">
          <input type="checkbox"></input>
          <button onClick={() => delTodo(index)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
