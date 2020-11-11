import React from 'react';

function TodoList({ todoList }) {
  
  return (
    <div>
      {todoList.map((item, i)=> (
        <h2>- {item}</h2>  
      ))}
    </div> 
  )
}

export default TodoList;