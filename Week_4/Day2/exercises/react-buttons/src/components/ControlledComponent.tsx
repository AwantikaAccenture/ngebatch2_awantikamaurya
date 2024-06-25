import React, { useState } from 'react'

export default function ControlledComponent() {
const [name, setname] = useState<string>("Guest");

 const handleInput =(e:any) =>{
    setname(e.target.value);
 }

  return (
    <div>
        <input type='text'value={name} onInput={(event:any) =>setname(event.target.value)}></input>
          <p style={{color:name}}>Name is {name}</p>
    </div>
  )
}
