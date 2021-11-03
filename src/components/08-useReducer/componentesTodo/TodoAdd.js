import React from 'react'
import { useForm } from '../../../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

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
        handleAddTodo(newTodo)
        reset()
    }
    const [{description}, handleInputChange, reset] = useForm({
        description:''
    })
    return (
        <>
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
        </>
    )
}
