import React,{useState,createContext} from 'react'

export const TodoListContext = createContext()

export function TodoListProvider(props) {
    const [Todos, setTodos] = useState([])
    return (
        <TodoListContext.Provider value={[Todos,setTodos]}>
            {props.children}
        </TodoListContext.Provider>
    );
}
