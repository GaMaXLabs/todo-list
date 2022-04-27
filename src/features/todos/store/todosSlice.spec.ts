import { TodoStatus } from "../models/TodoStatus.model";
import reducer from "./todosSlice";
import todosReducer, { addTodo, addTodoAsync, TodosState } from "./todosSlice";

describe("todos reducers", () => {
  const initialState: TodosState = {
    todos: [],
    status: "idle",
  };
  it("should handle adding a todo item", () => {
    const actual = todosReducer(
      initialState,
      addTodo({
        id: "lksfjd",
        description: "test task",
        createdDate: new Date().getTime(),
        status: TodoStatus.active,
      })
    );
    expect(actual.todos.length).toEqual(1);
  });

  it("should update state when adding a todo item asyncronously", () => {
    const todoItem = {
      id: "lksfjd",
      description: "test task",
      createdDate: new Date().getTime(),
      status: TodoStatus.active,
    };
    const action = { type: addTodoAsync.fulfilled.type, payload: todoItem };
    const state = reducer(initialState, action);
    expect(state).toEqual({todos:[todoItem], status:"idle"});
  });

  it("todos state status should loading when request is pending ", () => {
    const todoItem = {
      id: "lksfjd",
      description: "test task",
      createdDate: new Date().getTime(),
      status: TodoStatus.active,
    };
    const action = { type: addTodoAsync.pending.type, payload: todoItem };
    const state = reducer(initialState, action);
    expect(state.status).toEqual("loading");
  });
});  
