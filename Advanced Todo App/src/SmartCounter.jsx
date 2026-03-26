import React, { useState } from 'react'

function SmartCounter() {

    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const increment = () => {
        setCount(count + Number(step))
    }
    const decrement = () => {
        setCount(count - Number(step))
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
            <div className='bg-white p-8 rounded-xl shadow-lg w-100 text-center'>
                <h1 className="text-3xl font-bold mb-4 ">Smart Counter</h1>
                <h2 className={`text-4xl font-semibold mb-4 ${count < 0 ? "text-red-600" : "text-black"}`}>
                    {count}
                </h2>
                {
                    count > 10 && (
                        <p className='text-yellow-600 mb-3'>Warning: Count is above 10!</p>
                    )
                }
                <input
                type="number" 
                value={step} 
                placeholder='Enter incremental value' 
                onChange={(e) => setStep(e.target.value)}
                className='w-full border p-2 rounded mb-4' />
                <div className='flex justify-between gap-2'>
                    <button onClick={decrement} className='bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 cursor-pointer'>-</button>
                    <button onClick={reset} className='bg-gray-500 text-white px-4 py-2 rounded w-full hover:bg-gray-500 cursor-pointer'>Reset</button>
                    <button onClick={increment} className='bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 cursor-pointer'>+</button>
                </div>
            </div>
        </div>
    )
}

export default SmartCounter
