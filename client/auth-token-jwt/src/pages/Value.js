import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../features/counter/counterSlice'

const Value = () => {
    const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const increase = () => {
        dispatch(increment())
    }
    const decrease = () => {
        dispatch(decrement())
    }

    return (
        <div className='p-10 flex flex-col items-center justify-center'>
            <span className='text-5xl text-red-500' >{value}</span>
            <div className='flex flex-row gap-5'>
                <span className='border rounded cursor-pointer p-5 bg-green-500' onClick={increase}>+</span>
                <span className='border rounded cursor-pointer p-5 bg-red-500' onClick={decrease}>-</span>
            </div>
        </div>
    )
}

export default Value