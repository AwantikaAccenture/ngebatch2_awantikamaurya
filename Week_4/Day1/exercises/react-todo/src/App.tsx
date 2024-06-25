import './App.css'
import ListTodo from './component/ListTodo'

const App = () => {
  // eslint-disable-next-line
  const todos = [
    {
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
  ]

  return (
    <div>
      <h1>Todo</h1>
      { /* your code goes here... */ }
      <ListTodo 
      todoList={todos}></ListTodo>


    </div>

    
  )
}

export default App
