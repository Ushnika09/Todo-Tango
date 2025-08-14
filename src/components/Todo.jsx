import React, { useState ,useEffect} from "react";
import del from "../assets/del.png";
import edit from "../assets/edit.png";

function Todo({ todos,handleDel,handleEdit }) {
  const [done, setDone] = useState([]);

  useEffect(() => {
    setDone(todos.map(() => false));
  }, [todos]);

  const completedCount = done.filter(Boolean).length;

  return (
    <>
      <div className="mb-4 p-2 bg-green-200/50 text-green-900 my-[1.4rem] rounded text-center font-semibold">
        {completedCount} out of {todos.length} tasks completed
      </div>

      {todos.map((todo, index) => {
        return (
          <div key={index} className="flex justify-between my-[1.4rem] rounded-2xl bg-purple-400/50 px-[1.5rem] py-[1.2rem] shadow-2xl gap-3.5 ">

            <div className="flex gap-5 justify-center items-center flex-1 min-w-0">

              <input type="checkbox" onChange={()=>{
                const newDone = [...done];
                newDone[index]=!newDone[index]
                setDone(newDone)
              }}/>

              <h1 className={`${done[index]?"line-through text-gray-500":"" } break-words flex-1 min-w-0`}>{todo}</h1>
            </div>

            <div className="flex gap-5 justify-center items-center">
              <img src={edit} onClick={()=>handleEdit(index)} className="h-[2rem]" />
              <img src={del} onClick={()=>handleDel(index)} className="h-[2rem]" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Todo;
