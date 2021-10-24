import React from 'react'

export const ShowIncrement = ({increment}) => {
    console.log('me volvi a generar')
    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={()=>increment()}
            >
                Incrementar
            </button>
        </div>
    )
}
