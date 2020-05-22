import React,{useContext} from 'react'
import Todos from '../Todos/Todos'
import {TodoListContext} from '../../providerContext/TodoListContext'

export default function TodoList() {
    const [todos,setTodos] = useContext(TodoListContext)
    return (
        <div>
        {
            todos.map(todo => (<Todos key={todo.id} todo = {todo}/>))
        }
        </div>
    )
}
