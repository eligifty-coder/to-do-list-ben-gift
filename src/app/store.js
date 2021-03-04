import { configureStore } from "@reduxjs/toolkit";
import addTodoReducer from "../components/Header/headerSlice";
export default configureStore({
  reducer: {
    addTodo: addTodoReducer,
  },
});
