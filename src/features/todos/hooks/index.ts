import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Todo } from "../models/Todo.model";
import {  getTodosAsync, addTodoAsync } from "../store/todosSlice";
/*
 work in progress perhaps in the future we can place custom hooks here to handle business logic
*/
export function useTodos() {
  const todos = useAppSelector((state) => state.todos.todos);
  const status = useAppSelector((state) => state.todos.status);
  const dispatch = useAppDispatch();
  dispatch(getTodosAsync());
  return { todos, status };
}

export function useNewTodo(todo: Todo) {
  const todos = useAppSelector((state) => state.todos.todos);
  const status = useAppSelector((state) => state.todos.status);
  const dispatch = useAppDispatch();
  dispatch(addTodoAsync(todo))
  
  return { status };
}
