import React,{useContext} from 'react'
import Todos from '../Todos/Todos'
import {TodoListContext} from '../../providerContext/TodoListContext'
import {List} from '@material-ui/core'

export default function TodoList() {
    const [todos,setTodos] = useContext(TodoListContext)
    return (
        <List style={{width:'50%',margin:'auto',marginTop:'15px'}}>
        {
            todos.map(todo => (<Todos key={todo.id} todo = {todo}/>))
        }
        </List>
    )
}
