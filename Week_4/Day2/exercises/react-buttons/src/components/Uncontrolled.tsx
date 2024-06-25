import React, { useRef } from 'react'

export default function Uncontrolled() {
    const element= useRef<HTMLInputElement |null>(null)
    const handleClick =() =>{
        console.log(element.current?.value)
    }
  return (
    <div>
        <input type='test' ref ={element} onInput={handleClick}></input>
        <p>Name is{element.current?.value}</p>

    </div>
  )
}
