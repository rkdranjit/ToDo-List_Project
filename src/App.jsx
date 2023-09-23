import { useReducer } from 'react';
import AddToDo from './AddTodo/AddToDo';
import './App.css'
import TodoList from './TodoList/TodoList';
import TodoContext from './context/TodoContext';
import TodoReducer from './reducers/TodoReducer';

function App() {

  const [todos,dispatch] = useReducer(TodoReducer,[]);
  return (
    <>
    <TodoContext.Provider value={{todos,dispatch}}> {/*in order to trigger an action we use dispatch */}   
      <AddToDo />
      <TodoList />
    </TodoContext.Provider>
   </>
  )
}

export default App;
