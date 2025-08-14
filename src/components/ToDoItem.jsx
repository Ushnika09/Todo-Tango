import React, { useState } from "react";
import Todo from "./Todo";

function ToDoItem({ todos,handleDel,handleEdit }) {
  return (
    <div>
      {todos.length == 0 ? (
        <div className="lg:p-[4rem] p-[2rem] text-center text-gray-600">
          <p>No tasks yet!</p>

          <p>Add your first task above to get started.</p>
        </div>
      ) : (
        <Todo todos={todos} handleDel={handleDel} handleEdit={handleEdit}/>
      )}
    </div>
  );
}

export default ToDoItem;
