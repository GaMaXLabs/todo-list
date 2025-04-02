import { AppBar, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { ClearAll, FactCheck, TaskAlt } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { TodoStatus } from "../../../features/todos/models/TodoStatus.model";
import { deleteTodoItemAsync, updateTodoAsync } from "../../../features/todos/store/todosSlice";

const Header: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const activeTodos = todos.filter((todo) => todo.status === TodoStatus.active);
  const completedTodos = todos.filter((todo) => todo.status === TodoStatus.completed);
  const dispatch = useAppDispatch();

  const markAllDoneClickHandler = () => {
    for (const todo of activeTodos) {
      dispatch(updateTodoAsync({ ...todo, status: TodoStatus.completed, completedDate: new Date().getTime() }))
    }
  }
  const clearAllDoneClickHandler = () => {
    for (const todo of completedTodos) {
      dispatch(deleteTodoItemAsync(todo))
    }
  }
  return (
    <header>
      <AppBar position="relative">
        <Toolbar>
          <FactCheck sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            App Mis Tareas
          </Typography>
          <div>

            <Tooltip title="Marcar todas las tareas como completadas">
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

            <Tooltip title="Limpiar todas las tareas completadas">
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
            {activeTodos.length} tareas pendientes
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
