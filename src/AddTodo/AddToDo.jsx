import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function AddToDo(){
    const {dispatch} = useContext(TodoContext)

    const [todoText,setTodoText] = useState('');

    function addTodo(todoText){
       dispatch({type : 'add_todo' , payload:{todoText}})
    }

    return(
        <>
            <input type="text" placeholder="Add Your Next ToDo...." 
                onChange={(e)=> setTodoText(e.target.value)}
                value={todoText}
            />
            <button onClick={() =>{
                addTodo(todoText)
                setTodoText('');
            }}>Add</button>
        </>
    )
}
export default AddToDo;