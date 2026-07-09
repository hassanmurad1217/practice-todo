import { useState } from "react";
import { TodoDateTime } from "./TodoDateTime";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const todoKey = "reactTodo";

// Main Todo component that manages the todo list
export const Todo = () => {
  // State: tasks is an array of todo objects: { id, content, checked }
  const [tasks, setTasks] = useState(() => {
    const rawTodo = localStorage.getItem(todoKey);
    return JSON.parse(rawTodo);
  });

  // Handler to add a new todo item from the form input
  const handleFormSubmit = (inputValue) => {
    // inputValue should be an object: { id, content, checked }
    const { id, content, checked } = inputValue || {};

    // Prevent adding a task if content is empty or whitespace
    if (!content || content.trim() === "") return;

    // Prevent adding duplicate tasks based on their content
    const ifTodoContentMatched = tasks.find(
      (curElem) => curElem.content === content,
    );
    if (ifTodoContentMatched) return;

    // Add the new task to the existing tasks array
    setTasks((prev) => [...prev, { id, content, checked }]);
  };

  // Handler to delete a single todo item by its content value
  // (value represents the 'content' property of the todo)
  const handleDeleteTodo = (value) => {
    const updatedTask = tasks.filter((curElem) => curElem.content !== value);
    setTasks(updatedTask);
  };

  // Todo LocalStorage
  localStorage.setItem(todoKey, JSON.stringify(tasks));

  // Handler to delete all todo items (clear the list)
  const handleDeleteTodoData = () => {
    setTasks([]);
  };

  // For check Funcationality
  const handleCheckTodo = (content) => {
    const updatedTask = tasks.map((curElem) => {
      if (curElem.content === content) {
        return { ...curElem, checked: !curElem.checked };
      } else {
        return curElem;
      }
    });
    setTasks(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>

      {/* Displays current date and time */}
      <TodoDateTime />

      {/* Renders the form to add a new task */}
      <TodoForm onAddTodo={handleFormSubmit} />

      {/* Renders the list of all added tasks */}
      <section className="myUnOrdList">
        <ul>
          {tasks.map((curElem) => {
            return (
              <TodoList
                key={curElem.id}
                data={curElem.content}
                checked={curElem.checked}
                handleDeleteTodo={handleDeleteTodo}
                onHandleCheckTodo={handleCheckTodo}
              />
            );
          })}
        </ul>
      </section>
      <section className="clear-btn-container">
        {/* Button to clear all todo items */}
        <button className="clear-btn" onClick={handleDeleteTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
