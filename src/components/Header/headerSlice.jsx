import { createSlice } from "@reduxjs/toolkit";

// slice for header
export const headerSlice = createSlice({
  name: "[header]",

  initialState: {
    todos: [
      { title: "Practice A little Python", date: "2021-03-04", id: 1 },
      { title: "Continue My Side project", date: "2021-05-07", id: 2 },
    ],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload.title,
        date: action.payload.date,
      });
    },
  },
});

// exporting the actions
export const { addTodo } = headerSlice.actions;

// exporting the reducer
export default headerSlice.reducer;
