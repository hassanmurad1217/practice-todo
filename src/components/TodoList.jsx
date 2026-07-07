import * as MdIcons from "react-icons/md";

export const TodoList = ({ key, data, handleDeleteTodo }) => {
  return (
    <li key={key} className="todo-item">
      <span className="notCheckList">{data}</span>
      <button>
        <MdIcons.MdCheck />
      </button>
      <button onClick={() => handleDeleteTodo(data)}>
        <MdIcons.MdDeleteForever />
      </button>
    </li>
  );
};
