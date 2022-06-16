import React from 'react';
import NavBar from './Component/Navbar';
import TodosList from './Component/TodosList';
//import './App.css';
//import TodoForm from './Component/TodoForm';

const App = () => {
  return (
    <>
      {/* <div className='todolist'>
        <h1>
          Todo List
          <span>Get things done, one item at a time.</span>
        </h1>
        
        <TodoForm />
      </div> */}

      <NavBar />
      <TodosList />
    </>
  );
}

export default App;
