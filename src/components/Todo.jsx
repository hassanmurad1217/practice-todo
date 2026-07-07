import { useState } from "react";
import { TodoDateTime } from "./TodoDateTime";
import * as MdIcons from "react-icons/md";

export const Todo = () => {
  // state for the input field
  const [inputValue, setInputValue] = useState("");

  // tasks is a list of strings
  const [tasks, setTasks] = useState([]);

  // inpuut field
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // form functionality
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    if (tasks.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTasks((prev) => [...prev, inputValue]);
    setInputValue("");
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
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <button type="submit" className="AddTask-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>

      {/* display all added tasks */}
      <section className="myUnOrdList">
        <ul>
          {tasks.map((curElem, idx) => (
            <li key={idx} className="todo-item">
              <span className="notCheckList">{curElem}</span>
              <button>
                <MdIcons.MdCheck />
              </button>
              <button onClick={() => handleDeleteTodo(curElem)}>
                <MdIcons.MdDeleteForever />
              </button>
            </li>
          ))}
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
