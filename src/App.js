import React from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import {
  Typography,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
// !context provider
import { TodoListProvider } from "./providerContext/TodoListContext";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

export default function App() {
  return (
    <TodoListProvider>
      <MuiThemeProvider theme={theme}>
        <div>
          <Typography variant="h2" color="primary" align="center">
            To Do List
          </Typography>
          <TodoInput />
          <TodoList />
        </div>
      </MuiThemeProvider>
    </TodoListProvider>
  );
}
