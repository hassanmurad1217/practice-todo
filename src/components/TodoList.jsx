import * as MdIcons from "react-icons/md";

export const TodoList = ({
  data,
  checked,
  onHandleCheckTodo,
  handleDeleteTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button onClick={() => onHandleCheckTodo(data)}>
        <MdIcons.MdCheck />
      </button>
      <button onClick={() => handleDeleteTodo(data)}>
        <MdIcons.MdDeleteForever />
      </button>
    </li>
  );
};
