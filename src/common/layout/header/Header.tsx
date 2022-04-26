import { AppBar, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { ClearAll, FactCheck, TaskAlt } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { TodoStatus } from "../../../features/todos/models/TodoStatus.model";
import { updateTodoAsync } from "../../../features/todos/store/todosSlice";

const Header: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const activeTodos = todos.filter((todo) => todo.status === TodoStatus.active);
  const dispatch = useAppDispatch();

  const markAllDoneClickHandler = () => {
    for (const todo of activeTodos) {
      dispatch(updateTodoAsync({ ...todo, status: TodoStatus.completed, completedDate: new Date().getTime() }))
    }
  }
  const clearAllDoneClickHandler = () => {

  }
  return (
    <header>
      <AppBar position="relative">
        <Toolbar>
          <FactCheck sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            To Do Demo App
          </Typography>
          <div>

            <Tooltip title="Mark all as done">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={markAllDoneClickHandler}
                color="inherit"
              >
                <TaskAlt />
              </IconButton>
            </Tooltip>

            <Tooltip title="Clear all done tasks">
              <IconButton
                size="large"
                onClick={clearAllDoneClickHandler}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <ClearAll />
              </IconButton>
            </Tooltip>

          </div>
          <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
            {activeTodos.length} items left
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
