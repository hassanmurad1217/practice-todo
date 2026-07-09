const todoKey = "reactTodo";

export const getLocalStorage = () => {
  const rawTodo = localStorage.getItem(todoKey);
  if (!rawTodo) return [];
  return JSON.parse(rawTodo);
};

export const setLocalStorage = (tasks) => {
  return localStorage.setItem(todoKey, JSON.stringify(tasks));
};
