"use client";
import { useState } from "react";

export type TodosType = {
  id: string;
  title: string;
  isDone: boolean;
  isEditing: boolean;
};

const TodoPage = () => {
  const [todos, setTodos] = useState<TodosType[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    if (!inputValue.trim()) return;
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: inputValue,
        isDone: false,
        isEditing: false,
      },
    ]);
    setInputValue("");
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const handleSave = (id: string, newTitle: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle, isEditing: false } : todo
      )
    );
  };

  const handleToggle = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 p-6">
          <h1 className="text-white text-2xl font-bold text-center">
            Миний Төлөвлөгөө
          </h1>
        </div>

        {/* Input Section */}
        <div className="p-6">
          <div className="flex gap-2 mb-6">
            <input
              value={inputValue}
              type="text"
              placeholder="Шинэ ажил нэмэх..."
              onChange={handleOnChange}
              onKeyDown={(e) => e.key === "Enter" && handleOnClick()}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <button
              onClick={handleOnClick}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Нэмэх
            </button>
          </div>

          {/* Todo List */}
          <div className="space-y-3">
            {todos.length === 0 && (
              <p className="text-center text-gray-400 py-4">
                Одоогоор ажил байхгүй байна.
              </p>
            )}

            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                  todo.isDone
                    ? "bg-gray-50 border-gray-200"
                    : "bg-white border-gray-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => handleToggle(todo.id)}
                    className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  />

                  {todo.isEditing ? (
                    <input
                      defaultValue={todo.title}
                      onBlur={(e) => handleSave(todo.id, e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        handleSave(todo.id, e.currentTarget.value)
                      }
                      autoFocus
                      className="flex-1 border-b-2 border-indigo-400 outline-none px-1 py-0.5"
                    />
                  ) : (
                    <span
                      className={`text-gray-700 transition-all ${
                        todo.isDone
                          ? "line-through text-gray-400"
                          : "font-medium"
                      }`}
                    >
                      {todo.title}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 ml-4">
                  {!todo.isEditing && (
                    <button
                      onClick={() => handleEdit(todo.id)}
                      className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      title="Засах"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    title="Устгах"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
