import './App.css'
import { useState } from 'react'
import ClickerButton from './components/ClickerButton'
import ColourButton from './components/ColourButton'
import ControlledComponent from './components/ControlledComponent'
import Uncontrolled from './components/Uncontrolled'
import Times from './components/Times'
import FetchCall from './components/FetchCall'
import Catalog from './components/Catalog'

const App = () => {
  // Our global state
  const [clicks, setClicks] = useState(0)

  // Our clicks state mutation function
  const handleCounterClick = () => {
    setClicks(clicks + 1)
  }
  const [color, setColor] = useState("blue")

  const handleColorClick =()=>{
    if(color == "blue"){
      setColor("red")
    }
    else{
      setColor("blue")
    }
  }
  // Render the ClickerButton component and pass down state value as a prop, as well as the function to update the state
  // Render the ColourButton component - TODO: pass down state value as a prop, as well as the function to update the state
  return (
    <>
      <ClickerButton clicks={clicks} color={color} handleClick={handleCounterClick} />
      <ColourButton colour={color} handleClick={handleColorClick}/>
      <ControlledComponent/>
      <Uncontrolled/>
      <Times/>
      <FetchCall/>
     
    </>
  )
}

export default App
