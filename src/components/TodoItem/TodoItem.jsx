import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./TodoItem.css";

const TodoItem = ({ id, title, date }) => {
  return (
    <div className="todo-item-container">
      <h3 className="todo-title">{title}</h3>
      <div className="delete-btn">
        <DeleteIcon />
      </div>
    </div>
  );
};

export default TodoItem;
