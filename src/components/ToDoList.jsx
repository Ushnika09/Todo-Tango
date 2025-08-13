import React, { useState } from 'react'
import add from '../assets/add.png'
import ToDoItem from './ToDoItem'

function ToDoList() {

    const [task,setTask]=useState("")
    const [todos,setTodos]=useState([])

    function handleClick(){
        if(!task.trim()) return
        let newTodos=[...todos,task]
        setTodos(newTodos)
        setTask("")
    }

  return (
    <div className=' shadow-2xl w-[50%] rounded-lg  bg-white/60  px-[3rem] py-[2.5rem] flex flex-col justify-center'>

        <div className='flex gap-4 justify-end'>
            <input type="text" placeholder='Enter Your Task Here' className='border w-full h-[2rem] rounded-lg p-3' value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={handleClick}><img className='h-[2.5rem]' src={add} alt="" /></button>
        </div>

        <ToDoItem todos={todos}/>


    </div>
  )
}

export default ToDoList