import {useState,useEffect} from "react";
function AddTodo({handleTodo}){
   const [text,setText] = useState("")
   const handleTasks=(e)=>{
        setText(e.target.value);
   }
   const onclick=()=>{
    handleTodo(text);
    setText(""); 
   }
    return(
        <div>
        <input  value={text} onChange={handleTasks} type="text" placeholder="Enter tasks" />     
        <button onClick={onclick} >ADD TASK</button>
        </div>
    )
    
}
export default AddTodo;

