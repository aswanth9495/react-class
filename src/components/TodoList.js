import React from 'react';

function TodoList({ todoList, deleteItem }) {
  
  return (
    <div>
      {todoList.map((item, i)=> (
        <h2>- {item} 
        <button 
          onClick={() => deleteItem(item) }> 
            Delete 
          </button>
        </h2>  
      ))}
    </div> 
  )
}

export default TodoList;