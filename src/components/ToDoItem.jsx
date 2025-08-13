import React, { useState } from "react";
import Todo from "./Todo";

function ToDoItem({ todos }) {
  return (
    <div>
      {todos.length == 0 ? (
        <div>
          <p>No tasks yet!</p>

          <p>Add your first task above to get started.</p>
        </div>
      ) : (
        todos.map((todo) => {
          return <Todo todo={todo} />;
        })
      )}
    </div>
  );
}

export default ToDoItem;
