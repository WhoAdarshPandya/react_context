import React from "react";
import {
  Paper,
  Zoom,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Todos({ todo }) {
  const checkTodo = (id, compl) => {
    alert(id);
  };
  const deleteTodo = id => {
    alert(id);
  }
  return (
    <Zoom in={true}>
      <Paper>
        <ListItem button style={{ marginTop: "10px" }}>
          <ListItemIcon>
            <Checkbox
              onChange={() => {
                checkTodo(todo.id, todo.completed);
              }}
              edge="start"
              checked={todo.completed}
            />
          </ListItemIcon>
          <ListItemText primary={todo.title} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </Zoom>
  );
}
