import React from 'react'
import {useFetch} from '../../hooks/useFetch.js'
import {useCounter} from '../../hooks/useCounter.js'
import '../02-useEffect/effects.css'
export const MultipleCustomHooks = () => {

    const {counter, increment}= useCounter(1)

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {author, quote} = !!data && data[0]
    //SI EXISTE LA DATA ---> SETEA AUTOR Y QUOTE EN DATA POSICION 0.
    //!!DATA => NEGAR 2 VECES UN NULO PARA TRANSFORMARLO EN FALSE. 
    //EN EL MOMENTO QUE DEJE DE SER NULO, ES TRUE, Y LA DATA SE SETEA EN POSICION 0.
    console.log(data)
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                ?   (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :   (
                    <blockquote className="blockquote text-end">
                        <p className="mb-0">{quote}</p>
                        <hr/>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }


            <button className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </button>
        </div>
    )
}

