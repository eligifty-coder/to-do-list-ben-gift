import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoListContainer.css";

const TodoListContainer = () => {
  // pulling the todos from store
  const { todos } = useSelector((state) => state.addTodo);

  return (
    // jsx for the todolist-container
    <div className="todolist-container">
      {todos.map((todo, index) => (
        // Todo Item and passing in the props
        <TodoItem
          key={index + 1}
          id={todo.id}
          title={todo.title}
          date={todo.date}
        />
      ))}
    </div>
  );
};

export default TodoListContainer;
