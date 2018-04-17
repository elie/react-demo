import React from "react";
import EditTodoForm from "./EditTodoForm";

const Todo = ({ task, removeTodo, editTodo }) => (
  <li>
    {task}
    <button onClick={removeTodo}>Delete</button>
    <EditTodoForm editTodo={editTodo} task={task} />
  </li>
);

export default Todo;
