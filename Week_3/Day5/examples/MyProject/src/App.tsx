import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'

function App() {
  const [count, setCount] = useState(0)
  const getQuote = () => "Be as you wish to seem"
  const emp = {id: 1, name:"Vishnu",skills: ["Java","Spring"]}
  function getGreeting(user?:string): JSX.Element{
    if(user) return <div>Hello {user}!</div>
    return <div>Hello Stranger</div>
  }
  function showCart(){
  const cart =["Book","Gadget"]
  return (cart.length>0)? <div>{cart.map((cart)=>(<li>{cart}</li>))}</div> :<p>Null</p>
  }
  return (
    <>
    <h1> React Learnings</h1>
    <p>{getQuote()}</p>
    <p>{emp.name}</p>
    <p>{emp.skills[0]}</p>
    <p>{getGreeting("Ram")}</p>
    <p>{showCart()}</p>
    <Greeter message='React World'/>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
