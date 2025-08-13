import React from 'react'

function Header() {
  return (
     <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 text-center shadow-lg">
        <h1 className='text-3xl font-bold p-1'> 🗒️ My To-Do List</h1>
        <h1 className='text-[1rem]  font-normal p-1'>{new Date().toLocaleDateString('en-US', {weekday: 'long',month: 'long',day: 'numeric',year: 'numeric'})}</h1>
    </div>
  )
}

export default Header