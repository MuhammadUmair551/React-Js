import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

const initialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      })
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => (
        todo.id !== action.payload
      ))
    },

    toggleTodo: (state, action)=>{      
      const todo = state.todos.find((todo)=>(
        String(todo.id) === String(action.payload)
      ))
      if(todo){ 
        todo.completed = !todo.completed
      }
    },
  },
})

export const {addTodo, deleteTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;