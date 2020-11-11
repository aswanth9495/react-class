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

  render() {
    // console.log(this.state.tasks);
    return (
      <div>
        <Header title="Todo App" />
        <AddTodo addItem={this.addItem} />
        <TodoList todoList={this.state.tasks} />
      </div>
    );
  }
}

export default App;