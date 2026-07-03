import { useState } from "react";
import { TodoDateTime } from "./TodoDateTime";

export const Todo = () => {
  const [input, setInput] = useState("");

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoDateTime />
      <section className="form">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="todo-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="AddTask-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};
