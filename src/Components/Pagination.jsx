function Pagination({total,current,handlePage}){
    const onclick=(e)=>{
        console.log(e.target.innerText)
        handlePage(+(e.target.innerText));
    }
    const pages=new Array(total).fill(0).map((el,i)=>(
        <button key={Date.now()+(i+1)} disabled={current===i+1} onClick={onclick}>{i+1}</button>
    ))
    return(
        <div id="pages">
            {pages}
        </div>
    )
}
export default Pagination;