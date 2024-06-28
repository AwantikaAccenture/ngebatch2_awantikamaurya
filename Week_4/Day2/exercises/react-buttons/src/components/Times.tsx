import React, { useEffect, useState } from 'react'

export default function Times() {
    const [Times, setTimes] = useState(new Date())
   useEffect(()=>{
    const id = setInterval(()=>{
   setTimes(new Date)
   console.log(id);
    },1000)
    return()=>{
        clearInterval(id)
    }
   },[])

  return (
    <div>
        <h3>Time now is{Times.toLocaleTimeString()}</h3>
    </div>
  )
}
