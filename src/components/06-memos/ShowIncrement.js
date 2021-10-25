import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
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
})
