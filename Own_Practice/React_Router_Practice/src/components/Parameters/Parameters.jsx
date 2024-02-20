import React from 'react'
import { useParams } from 'react-router-dom'

function Parameters() {
    let { parameter } = useParams()

    return (
        <div className='text-3xl bg-green-500'>
            <div className="flex justify-center items-center">
                <div className="">User:</div>
                <span className='mx-4'>{parameter}</span>
            </div>
        </div>
    )
}

export default Parameters