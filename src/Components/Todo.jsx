import {useState,useEffect} from "react";
import { addTodo, getTodo, todoDelete, todoToggle } from "../api/todo";
import AddTodo from './AddTodo';
import Pagination from "./Pagination";
import TodoList from "./TodoList";



function Todo(){
    const [todos,setTodos]=useState([]);  
    const [loading,setLoading]=useState(false);  
    const [page,setPage]=useState(1);  
    useEffect(()=>{
        handleGetTodos();
    },[page]);
    const handleGetTodos=()=>{
        setLoading(true);
       setTimeout(() => {
        getTodo(page).then((res)=>{
            setTodos(res);
            setLoading(false)
        }).catch((rej)=>{
            console.log("Rejected",rej);
            setLoading(false);
        })
       }, 600);
    }; 
    
    const handleTodo=(text)=>{
        const todo ={
            title:text,
            status:false
        };
        setLoading(true);
        addTodo(todo).then((res)=>{
            setLoading(false);
            handleGetTodos();
        }).catch((err)=>{
            console.log(err)
            setLoading(false)        
        })
    }
    const handleToggle=(id,newstatus)=>{
        setLoading(true)
        todoToggle(id,newstatus).then((res)=>{
            setLoading(false);
            handleGetTodos();
        }).catch((e)=>{
            setLoading(false)
        })
    };
    const handleDelete=(id)=>{
        setLoading(true)
        todoDelete(id).then((res)=>{
            setLoading(false)
            handleGetTodos();
        }).catch((e)=>{
            setLoading(false)
        })
    }
    const handlePage=(current)=>{
            setPage(current);
    }
    

    return(
        <div>
        <AddTodo handleTodo={handleTodo}/>
        <h3>{loading && "Loading..."}</h3>
        <div id="todos">
        {todos.map((el)=>{
            return <TodoList handleToggle={handleToggle} handleDelete={handleDelete} id={el.id} title={el.title} key={el.id} status={el.status} />
        })}
        </div>
        <div>
            <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
            <p>{page}</p>
            <button disabled={page===10} onClick={()=>setPage(page+1)}>NEXT</button>
        </div>
        <Pagination  total={10} current={page} handlePage={handlePage}/>
        
        </div>
    )
}
export default Todo;