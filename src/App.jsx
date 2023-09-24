import AddToDo from './AddTodo/AddToDo';
import './App.css'
import TodoList from './TodoList/TodoList';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <>
    <Provider store={store}>
        <AddToDo />
        <TodoList />
    </Provider>
   </>
  )
}

export default App;
