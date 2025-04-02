import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import TaskIcon from "@mui/icons-material/Task";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useNavigate } from "react-router-dom";

const AppMenu: React.FC = () => {
  let navigate = useNavigate();
  const onLink = (href: string) => {
    navigate(href);
  };
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels value={0}  >
        <BottomNavigationAction
          label="Pendientes"
        
          icon={<TaskAltIcon />}
          onClick={() => onLink("/")}
        />
        <BottomNavigationAction
          label="Completadas"
          icon={<TaskIcon />}
          onClick={() => onLink("/completed")}
        />
      </BottomNavigation>
    </Paper>
  );
};
export default AppMenu;
