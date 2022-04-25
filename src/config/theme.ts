import { createTheme, ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#273A60",
    },
    secondary: {
      main: "#ee6a46",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
