import React,{useState, useCallback} from 'react'
import {ShowIncrement} from './ShowIncrement'
import '../02-useEffect/effects.css'

export const CallbackHook = () => {


    const [counter, setCounter] = useState(10)

    /* const increment = () => {
        setCounter(counter + 1)
    } */

    const increment = useCallback(()=>setCounter(counter + 1),[setCounter])
    return (
        <div>
            <h1>useCallBackHook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}