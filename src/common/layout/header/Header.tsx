import { AppBar, Toolbar, Typography } from "@mui/material";
import { FactCheck } from "@mui/icons-material";

const Header: React.FC = () => {
  return (
    <header>
      <AppBar position="relative">
        <Toolbar>
          <FactCheck sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            To Do Demo App
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
