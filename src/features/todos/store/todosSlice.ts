import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo.model";
import { TodoStatus } from "../models/TodoStatus.model";
import { fetchTodos, postTodo, updateTodo } from "../services/api";

export interface TodosState {
  todos: Array<Todo>;
  status: "idle" | "loading" | "failed";
}

const initialState: TodosState = {
  todos: new Array<Todo>(),
  status: "idle",
};

// async store modifiers
export const getTodosAsync = createAsyncThunk("todos/get", fetchTodos);
export const addTodoAsync = createAsyncThunk("todos/add", postTodo);
export const updateTodoAsync = createAsyncThunk("todos/update", updateTodo);

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
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos.push(action.payload);
      })
      .addCase(addTodoAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const todoItem = state.todos.find((todo) => todo.id === action.payload.id);
        Object.assign(todoItem, action.payload);
      })
      .addCase(updateTodoAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addTodo, completeTodo, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;
