import React from 'react';
import { connect } from 'react-redux';
import { addTodoItem, deleteTodoItem } from '../stores/todoAppStore';

class TodoApp extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoItem({text: e.target.todo.value});
  }
  handleDelete = ({ id }) => {
    this.props.deleteItem({ id })
  }

  render() {  
    return (
      <div>
        This is the Todo App
        {this.props.todoList.map((item, i) => (
          <h1 key={i}>
            {i+1}. {item.text}
            <button onClick={() => this.handleDelete({ id: item.id})}>
              Delete  
            </button> 
          </h1> 
        ))}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" name="todo" />
          <button type="submit"> Add Item </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodoItem({ text }) {
      dispatch(addTodoItem({ text }))
    },
    deleteItem({ id }) {
      dispatch(deleteTodoItem({ id }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);