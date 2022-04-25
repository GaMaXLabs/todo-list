import NewTodo from "../../components/new-todo/NewTodo";
import TodosList from "../../components/todos-list/TodosList";

const TodosPage: React.FC = () => {
  return (
    <>
      <NewTodo />
      <TodosList/>
    </>
  );
};
export default TodosPage;
