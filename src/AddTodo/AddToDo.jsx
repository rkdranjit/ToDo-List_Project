import { useState } from "react";
import { useDispatch } from "react-redux";

function AddToDo(){
    const dispatch =useDispatch(); //it will automatically detect what is the store and every application maintaining one store
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