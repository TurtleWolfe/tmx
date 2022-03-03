import { createTheme } from "@mui/material/styles";
import createPalette from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: createPalette({
    primary: {
      light: "#fb5052",
      main: "#c10c29",
      dark: "#890000",
      contrastText: "#fff",
      mainGradient: "linear-gradient(to right bottom, #c00f29, #600815)",
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
  }),
  typography: {
    fontFamily: ["Rubik", "Roboto"].join(","),
  },
});

export default theme;
