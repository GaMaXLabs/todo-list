import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo.model";
import { TodoStatus } from "../models/TodoStatus.model";
import { fetchTodos, postTodo } from "../services/api";

export interface TodosState {
  todos: Array<Todo>;
  status: "idle" | "loading" | "failed";
}

const initialState: TodosState = {
  todos: new Array<Todo>(),
  status: "idle",
};

export const getTodosAsync = createAsyncThunk("todos/getTodos", fetchTodos);

export const addTodoAsync = createAsyncThunk("todos/addTodo", postTodo);

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
        todoItem.completedDate = new Date();
      }
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(
        (todo) => todo.status === TodoStatus.active
      );
    }, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
      })
      .addCase(getTodosAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodoAsync.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(addTodoAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addTodo, completeTodo, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;
