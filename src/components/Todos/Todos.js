import React from 'react'

export default function Todos({todo}) {
    return (
        <div>
            {todo.title}
            {todo.completed.toString()}
            {todo.id}
        </div>
    )
}
