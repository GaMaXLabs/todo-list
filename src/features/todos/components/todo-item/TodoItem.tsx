import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import moment from "moment";
import { useAppDispatch } from "../../../../app/hooks";
import { Todo } from "../../models/Todo.model";
import { TodoStatus } from "../../models/TodoStatus.model";
import { completeTodo } from "../../store/todosSlice";

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  const labelId = `checkbox-list-secondary-label-${props.todo.id}`;
  const dispatch = useAppDispatch();
  function checkedHanlder() {
    dispatch(completeTodo(props.todo.id));
  }

  return (
    <ListItem
      key={props.todo.id}
      secondaryAction={
        props.todo.status === TodoStatus.active ? (
          <Checkbox
            edge="end"
            inputProps={{ "aria-labelledby": labelId }}
            onChange={checkedHanlder}
          />
        ) : (
          ""
        )
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemText
          id={labelId}
          primary={props.todo.description}
          secondary={props.todo.status=== TodoStatus.active? `Created ${moment(props.todo.createdDate).fromNow()}`: `Completed ${moment(props.todo.completedDate).fromNow()}`}
        />
      </ListItemButton>
    </ListItem>
  );
};
export default TodoItem;
