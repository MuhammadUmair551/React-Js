import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../features/todo/todoSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()
  return (
    <li className='group flex justify-between items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl mb-2 transition-all duration-200 hover:bg-white/10 hover:border-white/20'>
      <span
        onClick={() =>
          dispatch(toggleTodo(todo.id))}
        className={`cursor-pointer flex-1 text-white transition-all duration-200 ${todo.completed
            ? "line-through text-white/40"
            : "text-white/90"
          }`}>
        {todo.text}

      </span>

      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-white/40 hover:text-red-400 transition-all duration-200 opacity-0 group-hover:opacity-100 text-xl">
        X
      </button>
    </li>
  )
}

export default TodoItem
