import React,{useReducer, useEffect} from 'react'
import './styles.css'
import { TodoReducer } from './TodoReducer'
import TodoList from './componentesTodo/TodoList'
import { TodoAdd } from './componentesTodo/TodoAdd'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const TodoApp = () => {
    const [todo, todoDispatch] = useReducer(TodoReducer,[],init)

    
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todo))
    }, [todo])

    const handleDelete = (todoId) => {
        //crear la action
        const action = { 
            type:'delete', 
            payload:todoId
        } 
        //hacer el dispatch
        todoDispatch(action)
    }
    const handleToggle = (todoId) => {
        todoDispatch({type: 'toggle', payload:todoId})
    }

    const handleAddTodo = (newTodo) => {
        todoDispatch({
            type: 'add',
            payload: newTodo
        })
    }
    return (
        <div>
            <h1>TodoApp ({todo.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todo} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={handleAddTodo}
                    />
                </div>

            </div>
        </div>
    )
}
