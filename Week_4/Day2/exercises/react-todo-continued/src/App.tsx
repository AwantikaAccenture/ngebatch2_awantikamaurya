import { useState } from "react"
import './App.css'
import Todos from "./component/Todos"
import ListTodo from "./component/ListTodo";


const App = () => {
  //Use useState to manage todos
 
  const [todos, setTodos] = useState([{
    id: 1,
    task: 'Walk the Dog',
    complete: false,
  },
  {
    id: 2,
    task: 'Feed the Cat',
    complete: true,
  },
  {
    id: 3,
    task: 'Fly the Bird',
    complete: true,
  },
  {
    id: 4,
    task: 'Read a book',
    complete: true,
  },
  ]);

  const addTodo =(addNewTodo:any)=>{
    const newTodo = {
      id: todos.length+1,
      task:addNewTodo,
      complete: false,
    };
    setTodos([...todos,newTodo]);

  }


  return (
    <>
      <Todos getTodo = {addTodo} />
      <ListTodo AllTodo={todos}></ListTodo>
    </>
  )
}

export default App
