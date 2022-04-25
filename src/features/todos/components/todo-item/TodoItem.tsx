import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import moment from "moment";
import { Todo } from "../../models/Todo.model";
import { TodoStatus } from "../../models/TodoStatus.model";

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  const labelId = `checkbox-list-secondary-label-${props.todo.id}`;
  return (
    <ListItem
      key={props.todo.id}
      secondaryAction={
        props.todo.status === TodoStatus.active ? (
          <Checkbox edge="end" inputProps={{ "aria-labelledby": labelId }} />
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
          secondary={`Created ${moment(props.todo.createdDate).fromNow()}`}
        />
      </ListItemButton>
    </ListItem>
  );
};
export default TodoItem;
