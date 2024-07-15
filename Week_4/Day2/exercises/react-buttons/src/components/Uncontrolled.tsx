import React, { useRef } from 'react'

export default function Uncontrolled() {
  const element = useRef<HTMLInputElement|null>(null)
  function handleClick() {
      console.log(element.current?.value);

  }
return (
  <div>
        <input type="text" ref={element} onInput={handleClick}></input>
        <p> hello{ element?.current?.value}</p>
  </div>
);
}
