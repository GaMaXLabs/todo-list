import List from "@mui/material/List";
import moment from "moment";
import { Todo } from "../../models/Todo.model";
import { TodoStatus } from "../../models/TodoStatus.model";
import TodoItem from "../todo-item/TodoItem";

const TodosList: React.FC = () => {
  const dateTest = moment("Thu Oct 25 2018 17:30:03 GMT+0300").fromNow();
  const testTodos: Array<Todo> = [
    {
      id: "1",
      description: "Tarea de Ejemplo",
      status: TodoStatus.active,
      createdDate: new Date(),
    },
    {
      id: "2",
      description: "Tarea de Ejemplo completada",
      status: TodoStatus.completed,
      createdDate: new Date(),
    },
  ];
  return (
    <List
      dense
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      {testTodos.map((todo) => {
        return (
         <TodoItem  key={todo.id} todo={todo}/>
        );
      })}
    </List>
  );
};
export default TodosList;
