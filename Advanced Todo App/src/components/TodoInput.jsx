import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function TodoInput() {
  const [inp, setInp] = useState("")
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!inp.trim()) return

    dispatch(addTodo(inp))
    setInp("");
  }

  return (
    <div className='flex gap-3 mb-6'>
      <input type="text"
        value={inp}
        placeholder='Enter task..'
        onChange={(e) => setInp(e.target.value)}
        className='flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all' />
      <button
        onClick={handleAdd}
        className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'>Add</button>
    </div>
  )
}

export default TodoInput
