import React,{useReducer, useEffect} from 'react'
import './styles.css'
import { TodoReducer } from './TodoReducer'
import {useForm} from '../../hooks/useForm'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const TodoApp = () => {
    const [todo, todoDispatch] = useReducer(TodoReducer,[],init)

    const [{description}, handleInputChange, reset] = useForm({
        description:''
    })
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

    const handleSubmit = (e) => {
        e.preventDefault()
        if(description == false){
            return
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }
        todoDispatch(action)
        reset()
    }
    return (
        <div>
            <h1>TodoApp ({todo.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ul className='list-group list-group-flush'>
                        {todo.map((todo, i)=>(
                            <li
                                key={todo.id}
                                className='list-group-item'
                            >
                                <p className='text-center'>{i+1}.{todo.desc}</p>
                                <button
                                    className="btn btn-danger"
                                    onClick={()=>handleDelete(todo.id)}
                                >
                                    Borrar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text'
                            name='description'
                            placeholder='Aprender ...'
                            autoComplete='off'
                            className='form-control'
                            value={description}
                            onChange={handleInputChange}
                        />

                        <button 
                            className="btn btn-outline-primary mt-1 btn-block"
                            type='submit'
                        >
                            Agregar
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}
