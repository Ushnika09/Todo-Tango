import React from 'react'
import del from '../assets/del.png'
import edit from '../assets/edit.png'

function Todo({todo}) {
  return (
    <div className='flex justify-between bg-teal-200 px-[1.5rem] py-[1rem]'>
        <div className='flex gap-5 justify-center items-center'>
            <input type="checkbox" />
            <p>{todo}</p>
        </div>
        <div className='flex gap-5 justify-center items-center'>
            <img src={edit} alt=""  className='h-[2rem]'/>
            <img src={del} alt=""  className='h-[2rem]'/>
        </div>
    </div>
  )
}

export default Todo