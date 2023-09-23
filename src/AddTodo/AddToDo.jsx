import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function AddToDo(){
    const {todos,setTodos} = useContext(TodoContext)

    const [todoText,setTodoText] = useState('');

    return(
        <>
            <input type="text" placeholder="Add Your Next ToDo...." 
                onChange={(e)=> setTodoText(e.target.value)}
                value={todoText}
            />
            <button onClick={() =>{
                let nextId = todos.length + 1;
                setTodos([...todos,{id:nextId,text:todoText,isFinished:false}]);
                setTodoText('');
            }}>Add</button>
        </>
    )
}
export default AddToDo;