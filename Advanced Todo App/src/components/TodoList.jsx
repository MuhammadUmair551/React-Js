import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1 custom-scroll">
      {todos.length === 0 ? (
        <div className="text-center py-8 text-white/40 text-sm">
           No tasks yet.
        </div>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;