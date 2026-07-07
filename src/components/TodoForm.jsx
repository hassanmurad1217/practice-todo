import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  // state for the input field
  const [inputValue, setInputValue] = useState("");
  // inpuut field
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // form functionality in child component
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
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
  );
};
