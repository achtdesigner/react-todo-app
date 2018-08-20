import React, { Component } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class App extends Component {
  state = {
    todos: [],
    idCount: 0
  };

  // addTodo
  addTodo = todoName => {
    this.setState(prevState => {
      const newTodos = prevState.todos.slice().concat({
        name: todoName,
        id: prevState.idCount
      });
      return {
        todos: newTodos,
        idCount: prevState.idCount + 1
      };
    });
  };
  // deleteTodo
  deleteTodo = todoId => {
    this.setState(prevState => {
      const todos = prevState.todos.slice().filter(todo => todo.id !== todoId);
      return {
        todos
      };
    });
  };

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const todos = reorder(
      this.state.todos,
      result.source.index,
      result.destination.index
    );

    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="app">
        <Card className="main-container">
          <TodoInput handleSubmit={this.addTodo} />
          <TodoList
            data={this.state.todos}
            handleClick={this.deleteTodo}
            onDragEnd={this.onDragEnd}
          />
        </Card>
      </div>
    );
  }
}

export default App;
