import React, { useState,useContext } from "react";
import {
  TextField,
  Button,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { v4 as uuid } from "uuid";
import {TodoListContext} from '../../providerContext/TodoListContext'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

export default function TodoInput() {
  const [text, setText] = useState("");
  const [todos,setTodos] = useContext(TodoListContext)
  const changeText = (e) => {
    setText(e.target.value);
  };
  const addTodo = () => {
    if(text !== "")
    {
        let new_todo = {
            title:text,
            id:uuid(),
            completed:false
        }
        setTodos(prev => [...prev,new_todo])
        setText("")
    }
  };
  const Keyp = e => {
      if(e.key === "Enter")
      {
          addTodo()
      }
  }
  return (
    <MuiThemeProvider theme={theme}>
      <div style={{ width: "50%", margin: "auto", textAlign: "center" }}>
        <TextField
          style={{ width: "100%" }}
          color="primary"
          label="Enter Todo"
          value={text}
          onKeyPress={(e) => {Keyp(e)}}
          onChange={(e) => {
            changeText(e);
          }}
        />
        <br />
        <br />
        <Button
          style={{ textAlign: "center" }}
          variant="contained"
          color="primary"
          onClick={() => {
            addTodo();
          }}
        >
          SUBMIT
        </Button>
      </div>
    </MuiThemeProvider>
  );
}
