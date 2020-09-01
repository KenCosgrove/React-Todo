import React from 'react'

const Todo = props => {
    return (
        <div /* className={`todo${props.todos.completed ? 'completed' : ''}`}
             onClick = {()=> props.toggleTodo(props.todos.id)} */
        >
            <p>{props.todo}</p>
        </div>
    )
}

export default Todo
