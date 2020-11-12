import React, { Component } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    tasks: []
  }

  addItem = (newTodo) => {
    const newTasks = [...this.state.tasks, newTodo];
    this.setState({
      tasks: newTasks
    });
  }
  
  deleteItem = (itemToDelete) => {
    const newTasks = this.state.tasks.filter(
      (item) => {
        return item!== itemToDelete;
      }
    );
    this.setState({
      tasks: newTasks,
    })
  }

  render() {
    // console.log(this.state.tasks);
    return (
      <div>
        <Header title="Todo App" />
        <AddTodo addItem={this.addItem} />
        <TodoList 
          todoList={this.state.tasks}
          deleteItem={this.deleteItem}
         />
      </div>
    );
  }
}

export default App;