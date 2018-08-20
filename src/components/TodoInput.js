import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

class TodoInput extends Component {
  state = {
    input: ''
  };
  render() {
    return (
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
            this.props.handleSubmit(this.state.input);
            this.setState({
              input: ''
            });
          }
        }}
      />
    );
  }
}

export default TodoInput;
