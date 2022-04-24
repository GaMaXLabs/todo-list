import {  createSlice } from "@reduxjs/toolkit";

export interface TodosState {
  todos: Array<string>;
  status: "idle" | "loading" | "failed";
}

const initialState: TodosState = {
  todos: [],
  status: "idle",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state) => {},
  },
});

export const { addTodo } = todosSlice.actions;


export default todosSlice.reducer;
