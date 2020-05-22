import React,{useState,createContext} from 'react'

export const TodoListContext = createContext()

export function TodoListProvider(props) {
    const [Todos, setTodos] = useState([
        {title:'lorem ipsum',id:'1',completed:false}
    ])
    return (
        <TodoListContext.Provider value={[Todos,setTodos]}>
            {props.children}
        </TodoListContext.Provider>
    );
}
