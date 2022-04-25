import { useAppSelector } from "../../../../app/hooks";
import TodosList from "../../components/todos-list/TodosList";
import { TodoStatus } from "../../models/TodoStatus.model";

const CompletedTodosPage: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const completedTodos = todos.filter(
    (todo) => todo.status === TodoStatus.completed
  );
  return (
    <>
      <TodosList todos={completedTodos} />
    </>
  );
};
export default CompletedTodosPage;
