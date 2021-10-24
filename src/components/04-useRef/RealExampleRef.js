import React, { useState } from 'react'
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'
import '../02-useEffect/effects.css'
export const RealExampleRef = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
           <h1> RealExampleRef </h1> 
           <hr />
           { show && <MultipleCustomHooks />}
           {/* SI SHOW ESTA EN TRUE, LO MUESTRA. UN IF SIN ELSE */}
           <button 
                className="btn btn-primary mt-5"
                onClick={()=>setShow(!show)}
            >
               {!show?('Show'):('Hide')}
           </button>
        </div>
    )
}
