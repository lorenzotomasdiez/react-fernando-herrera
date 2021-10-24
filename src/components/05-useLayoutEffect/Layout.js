import React,{useLayoutEffect, useRef} from 'react'
import {useFetch} from '../../hooks/useFetch.js'
import {useCounter} from '../../hooks/useCounter.js'
import '../02-useEffect/effects.css'
import './layout.css'
export const Layout = () => {

    const {counter, increment}= useCounter(1)

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {quote} = !!data && data[0]
    //SI EXISTE LA DATA ---> SETEA AUTOR Y QUOTE EN DATA POSICION 0.
    //!!DATA => NEGAR 2 VECES UN NULO PARA TRANSFORMARLO EN FALSE. 
    //EN EL MOMENTO QUE DEJE DE SER NULO, ES TRUE, Y LA DATA SE SETEA EN POSICION 0.
    
    const pTag = useRef()

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect())
        
    }, [quote])

    

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p 
                    className="mb-0"
                    ref={pTag}  
                >{quote}</p>
                <hr/>
            </blockquote>


            <button className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </button>
        </div>
    )
}

