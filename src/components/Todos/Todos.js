import React, { useContext } from "react";
import { TodoListContext } from "../../providerContext/TodoListContext";
import {
  Paper,
  Slide,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Todos({ todo }) {
  const [todos, setTodos] = useContext(TodoListContext);
  const checkTodo = (id, compl) => {
    setTodos((prevTodos) => [
      ...prevTodos.map((item) => {
        if (item.id === id) {
          item.completed = !compl;
        }
        return item;
      }),
    ]);
  };
  const deleteTodo = (id) => {
    setTodos((prevTodos) => [...prevTodos.filter((item) => item.id !== id)]);
  };
  return (
    <Slide direction="right" in={true}>
      <Paper>
        <ListItem
          button
          style={
            todo.completed
              ? { marginTop: "10px", background: "#dcdde1" }
              : { marginTop: "10px" }
          }
        >
          <ListItemIcon>
            <Checkbox
              color="primary"
              onChange={() => {
                checkTodo(todo.id, todo.completed);
              }}
              edge="start"
              checked={todo.completed}
            />
          </ListItemIcon>
          <ListItemText style={todo.completed?{color:'gray'}:{}} primary={todo.title} />
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
    </Slide>
  );
}
