import React, { useState } from 'react';

const Todos =({getTodo}:any) => {
    const [addTodo, setAddTodo] = useState('');

    const handleEvent = (e:any) =>{
        setAddTodo(e.target.value);
    };
    
    const handleAddtodo = ()=>{
        if(addTodo !==''){
            getTodo(addTodo);
            setAddTodo('');
        }
    };

    return(
        <div style={{padding:10}}>
            <input type='text' value={addTodo}
            onChange={handleEvent}/>
            
            <button onClick={handleAddtodo}>Add Todo</button>
        </div>
    )
};
export default Todos;