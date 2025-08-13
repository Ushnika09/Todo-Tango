import React from 'react'
import Header from './components/Header'
import './App.css'
import ToDoList from './components/ToDoList'


function App() {
  return (
    <div>
        <Header/>
        <div className='bg-cover bg-center h-[27rem] flex flex-col justify-center items-center py-[3rem] ' style={{backgroundImage:`url("https://images.unsplash.com/photo-1667418624689-540f55015c39?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>
            <ToDoList/>
        </div>
    </div>
  )
}

export default App