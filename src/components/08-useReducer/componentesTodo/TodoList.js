import React from 'react'
import TodoListItem from './TodoListItem'
//todos, handleDelete, handleToggle
const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className='list-group list-group-flush'>
            {todos.map((todo, i)=>(
                <TodoListItem todo={todo} i={i} handleToggle={handleToggle} handleDelete={handleDelete} key={todo.id} />
            ))}
        </ul>
    )
}

export default TodoList
