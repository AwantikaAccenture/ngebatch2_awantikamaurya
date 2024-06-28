import React, { useEffect, useState } from 'react'

export default function FetchCall() {
    const[users, setUsers] = useState([])
    const getData = async() =>{
        try{
     const response=  await fetch('https://jsonplaceholder.typicode.com/users')
    //  .then(res=> res.json())
    //    .then(data => setUsers(data)) 
    //    .catch((e) => console.log(e)) 
    const data = await response.json();
    setUsers(data)
        }catch(e){
            console.log("error",e)
        }
    }

    useEffect(()=>{
      getData();
    },[]);

    if(users.length == 0){
        return <div>Loading...</div>
    }
  return (
    <div>
        <ul>
            {users.map((user:any) =>
            <li key={user.id}>
             {user?.email}
            </li>
             )}
        </ul>
    </div>
  )
}
