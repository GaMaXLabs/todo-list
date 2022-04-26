import NewTodo from "../../components/new-todo/NewTodo";
import TodosList from "../../components/todos-list/TodosList";
import { addTodoAsync, getTodosAsync } from "../../store/todosSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TodoStatus } from "../../models/TodoStatus.model";
import { Todo } from "../../models/Todo.model";
import { useEffect } from "react";

const TodosPage: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const activeTodos = todos.filter((todo) => todo.status === TodoStatus.active);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodosAsync());
  }, []);
  function onSaveHandler(description: string) {
    const todo: Todo = {
      id: null,
      description: description,
      status: TodoStatus.active,
      createdDate: new Date().getTime(),
    };
    dispatch(addTodoAsync(todo));
  }
  return (
    <>
      <NewTodo onSave={onSaveHandler} value="" />
      <TodosList todos={activeTodos} />
    </>
  );
};
export default TodosPage;
