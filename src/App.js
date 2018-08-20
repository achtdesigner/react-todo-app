import React, { Component } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

class App extends Component {
  state = {
    todos: [],
    idCount: 0,
    input: ''
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
        idCount: prevState.idCount + 1,
        input: ''
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
  render() {
    return (
      <div className="app">
        <Card className="main-container">
          <TextField
            id="name"
            label="Add new Todo"
            type="text"
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
            margin="normal"
            fullWidth
            onKeyPress={e => {
              if (e.key === 'Enter' && this.state.input !== '') {
                this.addTodo(this.state.input);
              }
            }}
          />
          <List>
            {this.state.todos.map(todo => (
              <ListItem key={todo.id}>
                <Icon>drag_handle</Icon>
                <ListItemText primary={todo.name} />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => this.deleteTodo(todo.id)}
                  >
                    <Icon>delete</Icon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    );
  }
}

export default App;
