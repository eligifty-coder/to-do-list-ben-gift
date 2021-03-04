import React from "react";
import "./Todo.css";
import Header from "../Header/Header";
import TodoListContainer from "../TodoListContainer/TodoListContainer";
const Todo = () => {
  return (
    <div className="todo">
      <Header />
      <TodoListContainer />
    </div>
  );
};
export default Todo;
