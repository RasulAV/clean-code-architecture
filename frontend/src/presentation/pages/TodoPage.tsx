import React, { useState, useEffect } from "react";
import { ITodo, ITodoService } from "services/todo";

interface TodoPageProps {
  todoService: ITodoService;
}

const TodoPage: React.FC<TodoPageProps> = ({ todoService }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const loadedTodos = await todoService.getTodos();
    setTodos(loadedTodos);
  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoTitle.trim()) {
      await todoService.addTodo(newTodoTitle);
      setNewTodoTitle("");
      loadTodos();
    }
  };

  const handleToggleTodo = async (id: string, completed: boolean) => {
    await todoService.updateTodo(id, completed);
    loadTodos();
  };

  const handleDeleteTodo = async (id: string) => {
    await todoService.deleteTodo(id);
    loadTodos();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id, !todo.completed)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
