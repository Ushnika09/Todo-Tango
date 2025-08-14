import React, { useState } from 'react'
import add from '../assets/add.png'
import update from '../assets/update.png'
import ToDoItem from './ToDoItem'

function ToDoList() {

    const [task,setTask]=useState("")
    const [todos,setTodos]=useState([])
    const [editIndex,setEditIndex]=useState(null)

    function handleClick(){
        if(!task.trim()) return

        if(editIndex!==null){
          const newTodos=[...todos]
          newTodos[editIndex]=task
          setTodos(newTodos)
          setTask("")
          setEditIndex(null)
        }else{
          setTodos([...todos,task])
          setTask("")
        }
    }

    function handleEdit(index){
        setTask(todos[index])
        setEditIndex(index)
    }

    function handleDel(ind){
        
        let newTodos=todos.filter((_,toDel)=>toDel!==ind)
        setTodos(newTodos)
    }

  return (
    <div className=' shadow-2xl w-[50%] rounded-lg  bg-white/60  px-[3rem] py-[2.5rem] flex flex-col justify-center my-[3.5rem]'>

        <div className='flex gap-4 justify-end '>
            <input type="text" placeholder='Enter Your Task Here' className='border w-full h-[2rem] rounded-lg p-3 py-5' value={task} onChange={(e)=>setTask(e.target.value)}/>
            <img className='h-[2.5rem]' src={editIndex !== null ? update : add}  alt="" onClick={handleClick}/>
        </div>

        <ToDoItem todos={todos} handleDel={handleDel} handleEdit={handleEdit}/>


    </div>
  )
}

export default ToDoList