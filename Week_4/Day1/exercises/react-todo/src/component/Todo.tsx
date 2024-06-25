import {TodosProps} from "./ListTodo"

interface todos {
    todo: TodosProps
}

const Todo =(props:todos) => {
    
    return(
        <li key={props.todo.id} className={props.todo.complete?"complete":""}>{props.todo.task}</li>
    )

}

export default Todo;
