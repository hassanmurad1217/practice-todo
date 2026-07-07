import { useState } from "react";
import { TodoDateTime } from "./TodoDateTime";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {
  // tasks is a list of strings
  const [tasks, setTasks] = useState([]);

  // form functionality
  const handleFormSubmit = (inputValue) => {
    if (inputValue.trim() === "") return;
    if (tasks.includes(inputValue)) {
      return;
    }
    setTasks((prev) => [...prev, inputValue]);
  };

  // delete button functionality
  const handleDeleteTodo = (value) => {
    const updatedTask = tasks.filter((curElem) => curElem !== value);
    setTasks(updatedTask);
  };

  // delete all functionality
  const handleDeleteTodoData = () => {
    setTasks([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>

      <TodoDateTime />

      {/* form to add a new task */}
      <TodoForm onAddTodo={handleFormSubmit} />

      {/* display all added tasks */}
      <section className="myUnOrdList">
        <ul>
          {tasks.map((curElem, idx) => {
            return (
              <TodoList
                key={idx}
                data={curElem}
                handleDeleteTodo={handleDeleteTodo}
              />
            );
          })}
        </ul>
      </section>
      <section className="clear-btn-container">
        <button className="clear-btn" onClick={handleDeleteTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
