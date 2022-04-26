import NewTodo from "../../components/new-todo/NewTodo";
import TodosList from "../../components/todos-list/TodosList";
import { addTodo } from "../../store/todosSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TodoStatus } from "../../models/TodoStatus.model";

const TodosPage: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const activeTodos = todos.filter((todo) => todo.status === TodoStatus.active);
  const dispatch = useAppDispatch();
  function onSaveHandler(description: string) {
    const todo = {
      id: new Date().getTime().toString(),
      description: description,
      status: TodoStatus.active,
      createdDate: new Date(),
    };
    //dispatch(addTodoAsync(todo));
    dispatch(addTodo(todo));
  }
  return (
    <>
      <NewTodo onSave={onSaveHandler} />
      <TodosList todos={activeTodos} />
    </>
  );
};
export default TodosPage;
