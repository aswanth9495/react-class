import React from 'react';

function AddTodo({ addItem }) {
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.todo.value);
    addItem(e.target.todo.value);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="todo" />
        <button type="submit"> Add Item </button>
      </form>
    </div> 
  )
}

export default AddTodo;