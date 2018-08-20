import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

class TodoList extends Component {
  render() {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              <List>
                {this.props.data.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <ListItem key={todo.id}>
                          <Icon {...provided.dragHandleProps}>drag_handle</Icon>
                          <ListItemText primary={todo.name} />
                          <ListItemSecondaryAction>
                            <IconButton
                              aria-label="Delete"
                              onClick={() => {
                                this.props.handleClick(todo.id);
                              }}
                            >
                              <Icon>delete</Icon>
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default TodoList;
