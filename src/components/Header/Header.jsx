import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../UI/Card/Card";
import "./Header.css";
import { addTodo } from "./headerSlice";

const Header = () => {
  // using useDispatch Hook From React Redux
  const dispatch = useDispatch();

  // States to handle the control inputs
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // Function to handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // dispatching the add todo action
    dispatch(addTodo({ title, date }));
    setDate(null);
    setTitle("");
  };

  return (
    // JSX FOR HEADER
    <div className="todo-form">
      <Card>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="title">What's On Your Mind ?</label>
              <input
                type="text"
                id="title"
                date="title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Visit The Beach 🏖️"
                autoComplete="off"
                value={title}
              />
            </div>

            <div className="form-control">
              <label htmlFor="date">Expiration Date</label>
              <input
                type="date"
                name="date"
                id="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </div>

            <div className="form-action">
              <button type="submit">Add Todo</button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default Header;
