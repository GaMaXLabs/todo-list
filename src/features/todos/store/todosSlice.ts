import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo.model";
import { TodoStatus } from "../models/TodoStatus.model";

export interface TodosState {
  todos: Array<Todo>;
  status: "idle" | "loading" | "failed";
}

const initialState: TodosState = {
  todos: new Array<Todo>(),
  status: "idle",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      const todoItem = state.todos.find((todo) => todo.id === action.payload);
      if (todoItem) {
        todoItem.status = TodoStatus.completed;
        todoItem.completedDate= new Date();
      }
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(
        (todo) => todo.status === TodoStatus.active
      );
    },
  },
});

export const { addTodo, completeTodo, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;
