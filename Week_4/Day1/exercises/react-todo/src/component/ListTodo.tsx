import Todo from "./Todo"

export interface TodosProps{
   id:number,
   task:string,
   complete:boolean 
}

interface ListAllTodo{
    todoList : TodosProps[]
}

const ListTodo =(props:ListAllTodo) =>{
   
    return(
       
        <div>
        {props.todoList.map((todos:any) => (
            <Todo todo={todos}/>
        ))}
        </div>
        
       
    )
}
export default ListTodo;