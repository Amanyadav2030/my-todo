function TodoList({ status, title, handleToggle, id, handleDelete }) {
   return (
      <>
         <div>
            <div>{title}</div>  <div>{status ? "Done" : "NotDone"}</div>
            <button onClick={() => handleToggle(id, !status)} >Toggle</button>
            <button onClick={() => handleDelete(id)} >Delete</button>
         </div>

      </>
   )
}
export default TodoList;