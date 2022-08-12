
export const getTodo= (page)=>{
    return fetch(`https://safe-hollows-22804.herokuapp.com/tasks?_page=${page}&_limit=3`,{
     
     headers:{
            'Content-Type':'application/json',
        }
   }).then((res)=>{
     return res.json()
}).then(res=>res);
}

export const addTodo=async (todo)=>{
    fetch(`https://safe-hollows-22804.herokuapp.com/tasks`,{
          method: "POST",
         body:JSON.stringify(todo),
         headers:{
             'Content-Type':'application/json',
         }
    }).then((res)=>{
        return res.json()
    });
}
export const todoToggle=async (id,newstatus)=>{
    fetch(`https://safe-hollows-22804.herokuapp.com/tasks/${id}`,{
          method: "PATCH",
         body:JSON.stringify({status:newstatus}),
         headers:{
             'Content-Type':'application/json',
         }
    }).then((res)=>{
        return res.json()
    });
}
export const todoDelete=async (id)=>{
    fetch(`https://safe-hollows-22804.herokuapp.com/tasks/${id}`,{
          method: "DELETE",
         headers:{
             'Content-Type':'application/json',
         }
    }).then((res)=>{
        return res.json()
    });
}
