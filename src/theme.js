import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#fb5052",
      main: "#c10c29",
      dark: "#890000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fff554",
      main: "#edc314",
      dark: "#b69300",
      contrastText: "#000",
    },
    info: {
      light: "#5ee1f6",
      main: "#00afc3",
      dark: "#007f93",
      contrastText: "#000",
    },
  },
});

export default theme;
