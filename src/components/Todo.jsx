import { useEffect, useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <h2 className="date-time">{dateTime}</h2>
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
