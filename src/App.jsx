import { useEffect, useState } from 'react';
import AddToDo from './AddTodo/AddToDo';
import './App.css'
import TodoList from './TodoList/TodoList';
import TodoContext from './context/TodoContext';

function App() {

  const [todos,setTodos] = useState([
    {id:1, text:'todo1',isFinished:true},
    {id:2, text:'todo2',isFinished:false},
  ]);

  // function addTodos(todoText){
  //   let nextId = todos.length + 1;
  //   setTodos([...todos, {id:nextId , isFinished:false , text:todoText}]);
  // }

  useEffect(()=>{
    console.log(todos);
  })
  return (
    <>
    <TodoContext.Provider value={{todos,setTodos}}>
      <AddToDo />
      <TodoList />
    </TodoContext.Provider>
   </>
  )
}

export default App;
