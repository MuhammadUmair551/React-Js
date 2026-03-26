import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

function TodoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center p-4">
      <div className="bg-black/40 backdrop-blur-sm w-full max-w-lg rounded-3xl border border-white/20 shadow-2xl">
        
        <div className="px-6 pt-8 pb-4 border-b border-white/10">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              TaskFlow
            </h1>
          </div>
          <p className="text-white/50 text-center text-sm mt-2">
            organize your day, one task at a time
          </p>
        </div>

        <div className="px-6 pt-6">
          <TodoInput />
        </div>
        
        <div className="px-6 pb-8 pt-2">
          <TodoList />
        </div>

      </div>
    </div>
  );
}

export default TodoPage;