import React from 'react'

interface Todos {
  id:number,
  task:string,
  complete:boolean

}

interface ListTodoProps {
    AllTodo : Todos[]
}

const ListTodo = (props:ListTodoProps) => {
  return (
    <>
    <p>
        List of Todo
    </p>
    {props.AllTodo.map((todos) =>(
        <ul>
       <li key={todos.id} className={todos.complete?"complete":''}>{todos.id} {todos.task} {todos.complete?"complete":"Pending"} </li>
       </ul>
    ))}
    </>
  )
}
export default ListTodo;