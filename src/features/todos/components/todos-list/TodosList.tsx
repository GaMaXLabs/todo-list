import List from "@mui/material/List";
import { Todo } from "../../models/Todo.model";
import TodoItem from "../todo-item/TodoItem";

const TodosList: React.FC<{ todos: Array<Todo> }> = (props) => {
  return (
    <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
      {props.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </List>
  );
};
export default TodosList;
